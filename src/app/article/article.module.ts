import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from 'src/app/article/article/article.component';
import { ArticleFacade } from 'src/app/article/article.facade';
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect';
import { reducers } from 'src/app/article/store/reducers';
import { articleFeatureKey } from 'src/app/article/store/selectors';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module';
import { DeleteArticleEffect } from 'src/app/article/store/effects/deleteArticle.effect';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature(articleFeatureKey, reducers),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  providers: [ArticleFacade],
})
export class ArticleModule {}
