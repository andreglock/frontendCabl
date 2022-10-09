import { Injectable } from '@angular/core';
import { IUser } from './auth-module/user.model';
import { Observable } from 'rxjs';
import { ApiService } from './core-module';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor(private apiService: ApiService) {}

  public create(user: IUser): Observable<IUser | undefined> {
    return this.apiService.post('/users', { user });
  }

  public get(): Observable<IUser[]> {
    return this.apiService.get('/users');
  }

  public udpate(user: IUser): Observable<IUser | undefined> {
    return this.apiService.patch(`/users/${user.email}`, { user });
  }

  public delete(user: IUser): Observable<void> {
    return this.apiService.delete(`/users/${user.email}`);
  }
}
