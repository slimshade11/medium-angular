import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, mergeMap } from 'rxjs';

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthFacade } from 'src/app/auth/auth.facade';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentUserAction),
      mergeMap(() => {
        const token = this.authFacade.persistanceGet('accessToken');

        if (!token) {
          return of(getCurrentUserFailureAction());
        }

        return this.authFacade.getCurrentUser$().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),

          catchError((err) => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private authFacade: AuthFacade) {}
}
