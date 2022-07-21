import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getPopularTagsAction } from 'src/app/shared/modules/popular-tags/store/actions/getPopularTags.action';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { PopularTagsFacade } from 'src/app/shared/modules/popular-tags/popular-tags.facade';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null> = this.popularTagsFacade.getPopularTags$();
  isLoading$: Observable<boolean> = this.popularTagsFacade.getIsLoading$();
  error$: Observable<string | null> = this.popularTagsFacade.getErrors$();

  constructor(private store: Store, private popularTagsFacade: PopularTagsFacade) {}

  ngOnInit(): void {
    this.fetchPopularTags();
  }

  fetchPopularTags(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
