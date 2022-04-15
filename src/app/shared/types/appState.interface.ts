import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import { popularTagFeatureKey } from 'src/app/shared/modules/popular-tags/store/selectors';
import { PopularTagsStateInterface } from 'src/app/shared/modules/popular-tags/types/popular-tags-state.interface';
import { feedFeatureKey } from 'src/app/shared/modules/feed/store/selectors';

export interface AppStateInterface {
  auth: AuthStateInterface;
  [feedFeatureKey]: FeedStateInterface;
  [popularTagFeatureKey]: PopularTagsStateInterface;
}
