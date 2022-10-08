import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

/********************************************
 * Other app modules.
 ********************************************/

import {SharedModule} from '../shared-module';
import {CoreModule} from '../core-module';


/********************************************
 * Components.
 ********************************************/

import {LoginComponent} from './login/login.component';
import {TwoStepVerificationComponent} from './two-step-verification/two-step-verification.component';
import {TwoStepSetupComponent} from './two-step-setup/two-step-setup.component';

@NgModule({
  declarations: [
    LoginComponent,
    TwoStepVerificationComponent,
    TwoStepSetupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    LoginComponent,
  ],
  providers: []
})

export class AuthModule {
}

