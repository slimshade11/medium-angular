import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFormService {
  private registerForm$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);
  private registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  getRegisterForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  buildRegisterForm(): void {
    this.registerForm = this.getRegisterForm();
    this.registerForm$.next(this.registerForm);
  }

  getRegisterForm$(): Observable<FormGroup> {
    return this.registerForm$.asObservable();
  }
}
