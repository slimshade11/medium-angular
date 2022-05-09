import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CreateArticleService } from '@create-article/services/create-article.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  createArticleAction,
  createArticleSuccessAction,
} from '@create-article/store/actions/createArticle.action';
import { ArticleInterface } from '@shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { createArticleFailureAction } from '@create-article/store/actions/createArticle.action';

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: ArticleInterface) => createArticleSuccessAction({ article })),

          catchError((errorResponse: HttpErrorResponse) =>
            of(createArticleFailureAction({ errors: errorResponse.error.errors }))
          )
        );
      })
    );
  });

  redirectAfterCreate$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['/articles', article.slug]))
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
