import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from 'src/app/shared/modules/popular-tags/store/actions/getPopularTags.action';
import { PopularTagsFacade } from 'src/app/shared/modules/popular-tags/popular-tags.facade';
import { catchError, of } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsFacade.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),

          catchError(() => {
            return of(getPopularTagsFailureAction);
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private popularTagsFacade: PopularTagsFacade) {}
}
