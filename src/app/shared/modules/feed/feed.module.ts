import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { feedReducers } from 'src/app/shared/modules/feed/store/reducers';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature({ name: 'feed', reducer: feedReducers }),
  ],
  exports: [FeedComponent],
})
export class FeedModule {}
