import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFormService {
  private registerForm$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);
  private registerForm: FormGroup;

  private loginForm$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);
  private loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  getRegisterForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  buildRegisterForm(): void {
    this.registerForm = this.getRegisterForm();
    this.registerForm$.next(this.registerForm);
  }

  getRegisterForm$(): Observable<FormGroup> {
    return this.registerForm$.asObservable();
  }

  getLoginForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  buildLoginForm(): void {
    this.loginForm = this.getLoginForm();
    this.loginForm$.next(this.loginForm);
  }

  getLoginForm$(): Observable<FormGroup> {
    return this.loginForm$.asObservable();
  }
}
