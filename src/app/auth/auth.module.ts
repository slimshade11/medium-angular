import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module'
import { RegisterComponent } from 'src/app/auth/components/register/register.component'

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
