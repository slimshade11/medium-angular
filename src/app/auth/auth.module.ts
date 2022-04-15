import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducers } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthFormService } from 'src/app/auth/services/authForm.service';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import { AuthFacade } from 'src/app/auth/auth.facade';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { GetCurrentUserEffect } from 'src/app/auth/store/effects/getCurrentUser.effect';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';

import { authFeatureKey } from './store/selectors';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature({ name: authFeatureKey, reducer: authReducers }),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
  ],
  providers: [AuthFormService, AuthService, AuthFacade],
})
export class AuthModule {}
