import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormService } from 'src/app/auth/services/authForm.service';
import { StoreModule } from '@ngrx/store';
import { authReducers } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import { AuthFacade } from 'src/app/auth/auth.facade';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { GetCurrentUserEffect } from 'src/app/auth/store/effects/getCurrentUser.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
  ],
  providers: [AuthFormService, AuthService, AuthFacade],
})
export class AuthModule {}
