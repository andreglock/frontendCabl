import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent,
  TwoStepSetupComponent,
  TwoStepVerificationComponent
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
    path: 'auth/two-step',
    component: TwoStepVerificationComponent // TODO: remove
  },
  {
    path: 'auth/two-step-verification',
    component: TwoStepVerificationComponent // TODO: remove
  },
  {
    path: 'settings/two-step-verification', // TODO: remove
    component: TwoStepSetupComponent,
    canActivate: [AuthGuard],
    resolve: {
      user: UserService
    }
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
