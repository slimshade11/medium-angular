import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/auth/store/actions/register.action';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap((res) => {
        return this.authService.register(res.request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
