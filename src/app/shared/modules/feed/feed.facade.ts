import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import { feedSelector, isLoadingSelector } from 'src/app/shared/modules/feed/store/selectors';
import { errorSelector } from 'src/app/shared/modules/feed/store/selectors';

@Injectable({
  providedIn: 'root',
})
export class FeedFacade {
  constructor(private feedService: FeedService, private store: Store) {}

  getIsLoadingSelector(): Observable<boolean> {
    return this.store.pipe(select(isLoadingSelector));
  }

  getErrorSelector(): Observable<string> {
    return this.store.pipe(select(errorSelector));
  }

  getFeedSelector(): Observable<GetFeedResponseInterface> {
    return this.store.pipe(select(feedSelector));
  }

  getFeed$(url: string): Observable<GetFeedResponseInterface> {
    return this.feedService.getFeed$(url);
  }
}
