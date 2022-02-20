import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthFacade } from 'src/app/auth/auth.facade';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  LoginAction,
  LoginFailureAction,
  LoginSuccessAction,
} from 'src/app/auth/store/actions/login.action';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginAction),
      switchMap(({ request }) => {
        return this.authFacade.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.authFacade.persistanceSet('accessToken', currentUser.token);
            return LoginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(LoginFailureAction({ errors: errorResponse.error.errors }));
          })
        );
      })
    );
  });

  redirectAfterSubmit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LoginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private authFacade: AuthFacade, private router: Router) {}
}
