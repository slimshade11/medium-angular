import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from 'src/app/shared/modules/top-bar/top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { authReducers } from 'src/app/auth/store/reducers';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature({ name: 'auth', reducer: authReducers }),
  ],
  exports: [TopBarComponent],
})
export class TopBarModule {}
