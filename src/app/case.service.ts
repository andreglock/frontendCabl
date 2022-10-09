import { Injectable } from '@angular/core';
import { IUser } from './auth-module/user.model';
import { Observable } from 'rxjs';
import { ApiService } from './core-module';
import { ICase } from './feature-module/interfaces/case.interface';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  constructor(private apiService: ApiService) {}

  public create(newCase: ICase): Observable<ICase | undefined> {
    return this.apiService.post('/cases', { newCase });
  }

  public get(): Observable<ICase[]> {
    return this.apiService.get('/cases');
  }

  public udpate(newCase: ICase): Observable<ICase | undefined> {
    return this.apiService.patch(`/cases/${newCase.id}`, { newCase });
  }

  public delete(newCase: ICase): Observable<void> {
    return this.apiService.delete(`/cases/${newCase.id}`);
  }
}
