import { CreateArticleStateInterface } from '@create-article/types/createArticleState';
import { Action, createReducer, on } from '@ngrx/store';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '@create-article/store/actions/createArticle.action';

export const createArticleFeatureKey = 'createArticle';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state): CreateArticleStateInterface => {
    return {
      ...state,
      isSubmitting: true,
    };
  }),
  on(createArticleSuccessAction, (state): CreateArticleStateInterface => {
    return {
      ...state,
      isSubmitting: false,
    };
  }),
  on(createArticleFailureAction, (state, { errors }): CreateArticleStateInterface => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: errors,
    };
  })
);

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action);
}
