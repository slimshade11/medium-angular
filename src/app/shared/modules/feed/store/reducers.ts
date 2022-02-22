import { createReducer, on, Action } from '@ngrx/store';

import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action';

const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function feedReducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
