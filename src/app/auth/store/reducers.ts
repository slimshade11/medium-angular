import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import {
  LoginAction,
  LoginSuccessAction,
  LoginFailureAction,
} from 'src/app/auth/store/actions/login.action';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/auth/store/actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: true,
      validationErrors: null,
    };
  }),
  on(registerSuccessAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    };
  }),
  on(registerFailureAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    };
  }),
  on(LoginAction, (state): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: true,
      validationErrors: null,
    };
  }),
  on(LoginSuccessAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    };
  }),
  on(LoginFailureAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    };
  })
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
