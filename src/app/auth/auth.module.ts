import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormService } from './services/authForm.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ],
  providers: [AuthFormService],
})
export class AuthModule {}
