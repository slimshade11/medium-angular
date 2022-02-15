import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthFormService } from 'src/app/auth/services/authForm.service';
import { registerAction } from 'src/app/auth/store/actions/register.action';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  destroy$: Subject<void> = new Subject<void>();

  constructor(private authFormService: AuthFormService, private store: Store) {}

  ngOnInit(): void {
    this.getRegisterForm();
    this.initializeValues();
  }

  getRegisterForm(): void {
    this.authFormService.buildRegisterForm();
    this.authFormService
      .getRegisterForm$()
      .pipe(tap((registerForm) => (this.form = registerForm)))
      .subscribe();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };

    this.store.dispatch(registerAction({ request }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
