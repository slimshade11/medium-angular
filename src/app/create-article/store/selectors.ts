import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createArticleFeatureKey } from '@create-article/store/reducers';
import { CreateArticleStateInterface } from '@create-article/types/createArticleState';

export const createArticleFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>(createArticleFeatureKey);

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
);
