/**
 * THIS ROUTING FILE IS CURRENTLY NOT IN USE. ROUTING IN USE IS DEFINED IN
 * `app.routing.ts` file next to `app.module.ts` inside `app` folder.
 *
 * This is only for reference of how module routings should be there in
 * application.
 */


import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';

const authRouting: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  }
];

export const AuthRoutes = RouterModule.forChild(authRouting);
