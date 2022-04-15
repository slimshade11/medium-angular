import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PopularTagsStateInterface } from 'src/app/shared/modules/popular-tags/types/popular-tags-state.interface';

export const popularTagFeatureKey = 'popularTags';

export const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsStateInterface>(popularTagFeatureKey);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.data
);

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
);
