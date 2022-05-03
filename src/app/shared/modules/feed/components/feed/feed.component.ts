import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { stringify } from 'querystring';
import { parseUrl } from 'query-string';
import { takeUntil, tap } from 'rxjs/operators';

import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import { FeedFacade } from 'src/app/shared/modules/feed/feed.facade';
import { environment } from 'src/environments/environment.prod';
import { DestroyComponent } from 'src/app/shared/modules/destroy/destroy/destroy.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent extends DestroyComponent implements OnInit {
  @Input() apiUrl: string;

  feed$: Observable<GetFeedResponseInterface> | null;
  error$: Observable<string> | null;
  isLoading$: Observable<boolean>;
  queryParamsSubscription$: Subscription;

  limit: number;
  baseUrl: string;
  currentPage: number;

  constructor(
    private store: Store,
    private feedFacade: FeedFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.queryParamsSubscription$ = this.route.queryParams
      .pipe(
        tap((params: Params) => {
          this.currentPage = Number(params['page'] || '1');
          this.fetchFeed();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  initializeValues(): void {
    this.feed$ = this.feedFacade.getFeedSelector();
    this.error$ = this.feedFacade.getErrorSelector();
    this.isLoading$ = this.feedFacade.getIsLoadingSelector();
    this.limit = environment.limit;
    this.baseUrl = this.router.url.split('?')[0];
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrl);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });

    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }
}
