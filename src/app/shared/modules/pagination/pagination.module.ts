import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from 'src/app/shared/modules/pagination/pagination/pagination.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterModule],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
