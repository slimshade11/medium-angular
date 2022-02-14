import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { ActionTypes } from './actionTypes';

export const register = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
