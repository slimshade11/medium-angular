import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  getCurrentUserFailureAction,
} from './actions/getCurrentUser.action';
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from 'src/app/auth/store/actions/login.action';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/auth/store/actions/register.action';

// ===== INITIAL AUTHSTATE =====

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
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
  on(loginAction, (state): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: true,
      validationErrors: null,
    };
  }),
  on(loginSuccessAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    };
  }),
  on(loginFailureAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    };
  }),
  on(getCurrentUserAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(getCurrentUserSuccessAction, (state, action): AuthStateInterface => {
    return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    };
  }),
  on(getCurrentUserFailureAction, (state): AuthStateInterface => {
    return {
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    };
  })
);

export function authReducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
