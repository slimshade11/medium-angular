import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { GetFeedResponseInterface } from './types/getFeedResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedFacade {
  constructor(private feedService: FeedService) {}

  getFeed$(url: string): Observable<GetFeedResponseInterface> {
    return this.feedService.getFeed$(url);
  }
}
