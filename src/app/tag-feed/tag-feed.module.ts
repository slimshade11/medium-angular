import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './tag-feed/tag-feed.component';
import { RouterModule } from '@angular/router';

import { TagFeedRoutes } from 'src/app/tag-feed/tag-feed.routes';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feed-toggler/feed-toggler.module';

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TagFeedRoutes),
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
    FeedModule,
  ],
})
export class TagFeedModule {}
