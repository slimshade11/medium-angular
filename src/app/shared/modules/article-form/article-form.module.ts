import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleFormComponent } from 'src/app/shared/modules/article-form/article-form/article-form.component';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule, BackendErrorMessagesModule, LoadingModule, ReactiveFormsModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
