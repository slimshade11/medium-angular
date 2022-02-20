import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormService } from 'src/app/auth/services/authForm.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import { AuthFacade } from 'src/app/auth/auth.facade';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
  ],
  providers: [AuthFormService, AuthService, AuthFacade],
})
export class AuthModule {}
