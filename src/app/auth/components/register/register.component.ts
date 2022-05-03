import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { registerAction } from 'src/app/auth/store/actions/register.action';
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/auth/store/selectors';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { AuthFacade } from 'src/app/auth/auth.facade';
import { DestroyComponent } from '../../../shared/modules/destroy/destroy/destroy.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends DestroyComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private authFacade: AuthFacade, private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.getRegisterForm();
    this.initializeValues();
  }

  getRegisterForm(): void {
    this.authFacade.buildRegisterForm();
    this.authFacade
      .getRegisterForm$()
      .pipe(
        tap((registerForm) => (this.form = registerForm)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };

    this.store.dispatch(registerAction({ request }));
  }
}
