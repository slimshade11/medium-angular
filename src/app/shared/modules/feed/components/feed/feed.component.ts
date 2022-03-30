import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import { FeedFacade } from 'src/app/shared/modules/feed/feed.facade';
import { environment } from 'src/environments/environment.prod';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input() apiUrl: string;

  feed$: Observable<GetFeedResponseInterface> | null;
  error$: Observable<string> | null;
  isLoading$: Observable<boolean>;
  queryParamsSubscription: Subscription;
  destroy$: Subject<void> = new Subject<void>();

  limit: number;
  baseUrl: string;
  currentPage: number;

  constructor(
    private store: Store,
    private feedFacade: FeedFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeListeners();
    this.initializeValues();
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams
      .pipe(
        tap((params: Params) => {
          this.currentPage = Number(params['page'] || '1');
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

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrl }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
