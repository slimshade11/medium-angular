import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getPopularTagsAction } from 'src/app/shared/modules/popular-tags/store/actions/getPopularTags.action';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { popularTagsSelector } from 'src/app/shared/modules/popular-tags/store/selectors';
import {
  errorSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/popular-tags/store/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null> = this.store.pipe(select(popularTagsSelector));
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector));
  error$: Observable<string | null> = this.store.pipe(select(errorSelector));

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchPopularTags();
  }

  fetchPopularTags(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
