import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from 'src/app/article/store/actions/article.actions';
import { ArticleFacade } from 'src/app/article/article.facade';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),

      switchMap(({ slug }) => {
        return this.articleFacade.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article });
          }),

          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private articleFacade: ArticleFacade) {}
}
