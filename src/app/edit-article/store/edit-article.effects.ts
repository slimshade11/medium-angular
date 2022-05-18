import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from '@shared/services/article.service';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '@edit-article/store/edit-article.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ArticleInterface } from '@shared/types/article.interface';
import { EditArticleService } from '@edit-article/services/edit-article.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EditArticleEffects {
  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => getArticleSuccessAction({ article })),
          catchError(() => of(getArticleFailureAction))
        );
      })
    );
  });

  editArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArticleService.editArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => editArticleSuccessAction({ article })),
          catchError((errorResponse: HttpErrorResponse) =>
            of(editArticleFailureAction({ errors: errorResponse.error.errors }))
          )
        );
      })
    );
  });

  redirectArterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['/articles', article.slug]))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
