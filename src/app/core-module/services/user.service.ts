import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { AlertService } from './alerts.service';
import { ApiService } from './api.service';
import { IUser } from '../../auth-module/user.model';

@Injectable()
export class UserService implements Resolve<Observable<any>> {
  public currentUser = new BehaviorSubject<IUser | undefined>(undefined);
  private loading = true;

  constructor(private apiService: ApiService, private alertService: AlertService) {}

  resolve(): Observable<any> {
    if (this.currentUser.getValue()?.email) {
      return Observable.create(observer => {
        observer.next(this.currentUser.getValue());
        observer.complete();
      });
    } else {
      return this.load();
    }
  }

  load(): Observable<any> {
    this.loading = true;
    const userJSON = localStorage.getItem('user');
    if (!userJSON) {
      this.apiService.authenticationFailEvent.emit(401);
      return this.currentUser.asObservable();
    }

    this.currentUser.next(JSON.parse(userJSON));
    this.currentUser.asObservable();
  }

  set(data: IUser) {
    localStorage.setItem('user', JSON.stringify(data));
    this.currentUser.next(data);
  }

  reset() {
    this.currentUser.next(undefined);
  }

  /**
   * Update user.
   * @param context
   * @param user
   */
  patch(context, user) {
    context.loading = true;
    context.userForm.disable();
    delete user.email;

    this.apiService.patch(`/users/${user._id}`, user).subscribe(
      data => {
        context.loading = false;
        this.currentUser.next(data);
        context.userForm.enable();
        this.alertService.success('Changes Saved.');
      },
      error => {
        context.loading = false;
        context.userForm.enable();
        console.log(error);
        this.alertService.error(error);
      }
    );
  }
}
