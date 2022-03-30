import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import { FeedFacade } from '../../feed.facade';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string;

  feed$: Observable<GetFeedResponseInterface> | null;
  error$: Observable<string> | null;
  isLoading$: Observable<boolean>;

  constructor(private store: Store, private feedFacade: FeedFacade) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  initializeValues(): void {
    this.feed$ = this.feedFacade.getFeedSelector();
    this.error$ = this.feedFacade.getErrorSelector();
    this.isLoading$ = this.feedFacade.getIsLoadingSelector();
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrl }));
  }
}
