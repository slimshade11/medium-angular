import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { AuthFacade } from 'src/app/auth/auth.facade';
import { FormGroup } from '@angular/forms';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';
import { select, Store } from '@ngrx/store';
import { loginAction } from 'src/app/auth/store/actions/login.action';
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  validationErrors$: Observable<BackendErrorsInterface>;
  isSubmitting$: Observable<boolean>;

  constructor(private authFacade: AuthFacade, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.authFacade.buildLoginForm();
    this.authFacade
      .getLoginForm$()
      .pipe(
        tap((form) => {
          this.form = form;
        })
      )
      .subscribe();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };

    this.store.dispatch(loginAction({ request }));
  }
}
