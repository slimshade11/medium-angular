import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from '@shared/types/article.interface';
import { ActionTypes } from 'src/app/edit-article/store/action-types';
import { ArticleInputInterface } from '@shared/types/articleInput.interface';
import { BackendErrorsInterface } from '@auth/types/backendErrors.interface';

export const getArticleAction = createAction(ActionTypes.GET_ARTICLE, props<{ slug: string }>());

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const getArticleFailureAction = createAction(ActionTypes.GET_ARTICLE_FAILURE);

export const editArticleAction = createAction(
  ActionTypes.EDIT_ARTICLE,
  props<{ slug: string; articleInput: ArticleInputInterface }>()
);

export const editArticleSuccessAction = createAction(
  ActionTypes.EDIT_ARTICLE,
  props<{ article: ArticleInterface }>()
);

export const editArticleFailureAction = createAction(
  ActionTypes.EDIT_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
