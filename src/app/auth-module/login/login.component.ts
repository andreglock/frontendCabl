import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {environment} from '../../../environments/environment';

import {AlertService, ApiService, AuthService, UserService, UtilService} from '../../core-module/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('visible', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ])
  ]
})
export class LoginComponent {

  loading = false;
  message: string;
  user: FormGroup;
  website = environment.website;
  visible = 'hide';

  constructor(private authService: AuthService,
              private router: Router,
              private apiService: ApiService,
              private utilService: UtilService,
              private alertService: AlertService,
              private userService: UserService) {

    if (this.authService.hasLoggedIn()) {
      this.router.navigateByUrl('/').then();
    }
    this.setupForms();
    setTimeout(() => {
      this.visible = 'show';
    }, 175);

  }

  setupForms() {

    this.user = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.utilService.EMAIL_REGEX)
      ]),
      password: new FormControl('', [Validators.required])
    });

  }

  /**
   * email/Password login.
   */
  login() {
    this.loading = true;
    this.message = 'logging in...';

    this.apiService.post('/auth/login', this.user.value)
      .subscribe(data => {

        // normal login
        this.authService.set(data.access_token);
        this.userService.set(data.user);
        this.router.navigateByUrl('/').then();

      }, error => {

        this.loading = false;
        this.message = '';
        this.user.reset();
        this.alertService.error(error);
      });
  }
}
