import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from 'src/app/shared/modules/top-bar/top-bar/top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
