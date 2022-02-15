import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthFormService } from 'src/app/auth/services/authForm.service';
import { registerAction } from 'src/app/auth/store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;

  destroy$: Subject<void> = new Subject<void>();

  constructor(private authFormService: AuthFormService, private store: Store) {}

  ngOnInit(): void {
    this.getRegisterForm();
  }

  getRegisterForm(): void {
    this.authFormService.buildRegisterForm();
    this.authFormService
      .getRegisterForm$()
      .pipe(tap((registerForm) => (this.form = registerForm)))
      .subscribe();
  }

  onSubmit(): void {
    this.store.dispatch(registerAction(this.form.value));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
