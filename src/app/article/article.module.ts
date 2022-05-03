import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from 'src/app/article/article/article.component';
import { ArticleService } from 'src/app/shared/services/article.service';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule],
  providers: [ArticleService],
})
export class ArticleModule {}
