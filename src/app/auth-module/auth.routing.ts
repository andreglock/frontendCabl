/**
 * THIS ROUTING FILE IS CURRENTLY NOT IN USE. ROUTING IN USE IS DEFINED IN
 * `app.routing.ts` file next to `app.module.ts` inside `app` folder.
 *
 * This is only for reference of how module routings should be there in
 * application.
 */


import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const authRouting: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent // TODO: remove
      },
      {
        path: 'password-reset',
        component: PasswordResetComponent // TODO: remove
      },
    ]
  }
];

export const AuthRoutes = RouterModule.forChild(authRouting);
