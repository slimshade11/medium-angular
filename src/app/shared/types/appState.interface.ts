import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import { popularTagFeatureKey } from 'src/app/shared/modules/popular-tags/store/selectors';
import { PopularTagsStateInterface } from 'src/app/shared/modules/popular-tags/types/popular-tags-state.interface';
import { feedFeatureKey } from 'src/app/shared/modules/feed/store/selectors';
import { articleFeatureKey } from 'src/app/article/store/selectors';
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import { authFeatureKey } from 'src/app/auth/store/selectors';
import { createArticleFeatureKey } from '../../create-article/store/reducers';
import { CreateArticleStateInterface } from '@create-article/types/createArticleState';

export interface AppStateInterface {
  [authFeatureKey]: AuthStateInterface;
  [feedFeatureKey]: FeedStateInterface;
  [popularTagFeatureKey]: PopularTagsStateInterface;
  [articleFeatureKey]: ArticleStateInterface;
  [createArticleFeatureKey]: CreateArticleStateInterface;
}
