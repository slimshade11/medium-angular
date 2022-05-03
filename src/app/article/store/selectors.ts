import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';

export const articleFeatureKey = 'article';

export const articleFeatureSelector =
  createFeatureSelector<ArticleStateInterface>(articleFeatureKey);

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  ({ isLoading }) => isLoading
);

export const errorSelector = createSelector(articleFeatureSelector, ({ error }) => error);

export const articleSelector = createSelector(articleFeatureSelector, ({ data }) => data);
