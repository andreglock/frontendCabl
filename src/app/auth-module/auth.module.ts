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

@NgModule({
  declarations: [
    LoginComponent,
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

