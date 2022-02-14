import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthFormService } from 'src/app/auth/services/authForm.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;

  destroy$: Subject<void> = new Subject<void>();

  constructor(private authFormService: AuthFormService) {}

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
    console.log(this.form.value, this.form.valid);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
