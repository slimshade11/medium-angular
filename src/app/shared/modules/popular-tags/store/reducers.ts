import { PopularTagsStateInterface } from 'src/app/shared/modules/popular-tags/types/popular-tags-state.interface';
import { Action, createReducer, on } from '@ngrx/store';

import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailureAction,
} from 'src/app/shared/modules/popular-tags/store/actions/getPopularTags.action';

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state): PopularTagsStateInterface => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(getPopularTagsSuccessAction, (state, { popularTags }): PopularTagsStateInterface => {
    return { ...state, isLoading: false, data: popularTags };
  }),
  on(getPopularTagsFailureAction, (state): PopularTagsStateInterface => {
    return { ...state, isLoading: false };
  })
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}
