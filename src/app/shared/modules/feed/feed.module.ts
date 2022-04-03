import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxLoadingModule } from 'ngx-loading';
import { RouterModule } from '@angular/router';

import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/getFeed.effect';
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component';
import { feedReducers } from 'src/app/shared/modules/feed/store/reducers';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    NgxLoadingModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature({ name: 'feed', reducer: feedReducers }),
    RouterModule,
    ErrorMessageModule,
    PaginationModule,
    TagListModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
