import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleComponent } from 'src/app/article/article/article.component';
import { ArticleFacade } from 'src/app/article/article.facade';
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect';
import { reducers } from 'src/app/article/store/reducers';
import { articleFeatureKey } from 'src/app/article/store/selectors';
import { RouterModule, Routes } from '@angular/router';

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
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature(articleFeatureKey, reducers),
  ],
  providers: [ArticleFacade],
})
export class ArticleModule {}
