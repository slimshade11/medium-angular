import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthFormService } from 'src/app/auth/services/authForm.service';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app//shared/types/currentUser.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(
    private authFormService: AuthFormService,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}

  persistanceSet(key: string, data: any): void {
    this.persistanceService.set(key, data);
  }

  persistanceGet(key: string): any {
    return this.persistanceGet(key);
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.authService.register(data);
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.authService.login(data);
  }

  getRegisterForm(): FormGroup {
    return this.authFormService.getRegisterForm();
  }

  buildRegisterForm(): void {
    this.authFormService.buildRegisterForm();
  }

  getRegisterForm$(): Observable<FormGroup> {
    return this.authFormService.getRegisterForm$();
  }

  buildLoginForm(): void {
    this.authFormService.buildLoginForm();
  }

  getLoginForm$(): Observable<FormGroup> {
    return this.authFormService.getLoginForm$();
  }
}
