import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/getFeed.effect';
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component';
import { feedReducers } from 'src/app/shared/modules/feed/store/reducers';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature({ name: 'feed', reducer: feedReducers }),
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
