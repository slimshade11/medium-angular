import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CreateArticleComponent } from 'src/app/create-article/create-article/create-article.component';
import { ArticleFormModule } from 'src/app/shared/modules/article-form/article-form.module';
import { ArticleFormService } from 'src/app/shared/modules/article-form/article-form.service';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
  providers: [ArticleFormService],
})
export class CreateArticleModule {}
