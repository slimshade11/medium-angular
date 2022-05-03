import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleComponent } from 'src/app/article/article/article.component';
import { ArticleFacade } from 'src/app/article/article.facade';
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect';
import { reducers } from 'src/app/article/store/reducers';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
  ],
  providers: [ArticleFacade],
})
export class ArticleModule {}
