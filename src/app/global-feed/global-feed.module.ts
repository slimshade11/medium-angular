import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlobalFeedComponent } from 'src/app/global-feed/components/global-feed/global-feed.component';
import { GlobalFeedRoutes } from 'src/app/global-feed/global-feed.routes';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feed-toggler/feed-toggler.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(GlobalFeedRoutes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
})
export class GlobalFeedModule {}
