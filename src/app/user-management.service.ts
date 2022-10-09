import { Injectable } from '@angular/core';
import { IUser } from './auth-module/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor() {}
  create(user: IUser): Observable<IUser | undefined> {
    return undefined;
  }

  get(): Observable<IUser[]> {
    return new Observable<IUser[]>(observer => {
      observer.next([]);
    });
  }

  udpate(user: IUser): Observable<IUser | undefined> {
    return undefined;
  }

  delete(user: IUser): Observable<void> {
    return undefined;
  }
}
