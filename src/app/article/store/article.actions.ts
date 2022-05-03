import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/article/store/actionTypes';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

// GET ARTICLE
export const getArticleAction = createAction(ActionTypes.GET_ARTICLE, props<{ slug: string }>());

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const getArticleFailureAction = createAction(ActionTypes.GET_ARTICLE_FAILURE);

// DELETE ARTICLE
export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{ slug: string }>()
);

export const deleteArticleSuccessAction = createAction(ActionTypes.DELETE_ARTICLE_SUCCESS);

export const deleteArticleFailureAction = createAction(ActionTypes.DELETE_ARTICLE_FAILURE);
