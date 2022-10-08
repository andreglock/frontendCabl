import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent,
} from './auth-module';

import {AuthGuard} from './core-module/guards';
import {UserService} from './core-module/services';
import {HomeComponent} from './feature-module'; // CLI imports router

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    resolve: {
      user: UserService
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
