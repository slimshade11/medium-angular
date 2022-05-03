import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from 'src/app/article/store/actions/article.actions';
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';

const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const articleReducer = createReducer(
  initialState,
  on(getArticleAction, (state): ArticleStateInterface => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(getArticleSuccessAction, (state, { article }): ArticleStateInterface => {
    return {
      ...state,
      isLoading: false,
      data: article,
    };
  }),
  on(getArticleFailureAction, (state): ArticleStateInterface => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
