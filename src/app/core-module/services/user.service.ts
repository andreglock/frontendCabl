import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

import {AlertService} from './alerts.service';
import {ApiService} from './api.service';
import {IUser} from '../../auth-module/user.model';

@Injectable()
export class UserService implements Resolve<Observable<any>> {

  public currentUser = new BehaviorSubject<IUser | undefined>(undefined);
  private loading = true;

  constructor(private apiService: ApiService,
              private alertService: AlertService) {

  }

  resolve(): Observable<any> {
    if (this.currentUser.getValue().email) {
      return Observable.create((observer) => {

        observer.next(this.currentUser.getValue());
        observer.complete();

      });
    } else {
      return this.load();
    }
  }

  load(): Observable<any> {
    this.loading = true;
    const user_id = localStorage.getItem('email');
    if (!user_id) {
      this.apiService.authenticationFailEvent.emit(401);
      return this.currentUser.asObservable();
    }

    return Observable.create((observer) => {

      this.apiService.get(`/users/${user_id}`)
        .subscribe((user: IUser) => {

          this.loading = false;
          this.currentUser.next(user);
          observer.next(this.currentUser.getValue());
          observer.complete();

        }, error => {

          this.apiService.authenticationFailEvent.emit(401);
          observer.complete();

        });

    });

  }

  set(data: IUser) {
    localStorage.setItem('email', data.email);
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

    this.apiService.patch(`/users/${user._id}`, user)
      .subscribe(data => {

        context.loading = false;
        this.currentUser.next(data);
        context.userForm.enable();
        this.alertService.success('Changes Saved.');

      }, error => {

        context.loading = false;
        context.userForm.enable();
        console.log(error);
        this.alertService.error(error);

      });
  }

}
