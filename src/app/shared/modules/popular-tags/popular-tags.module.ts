import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { reducers } from 'src/app/shared/modules/popular-tags/store/reducers';
import { PopularTagsComponent } from 'src/app/shared/modules/popular-tags/popular-tags/popular-tags.component';
import { GetPopularTagsEffect } from 'src/app/shared/modules/popular-tags/store/effects/getPopularTags.effect';
import { popularTagFeatureKey } from 'src/app/shared/modules/popular-tags/store/selectors';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(popularTagFeatureKey, reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    ErrorMessageModule,
  ],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
