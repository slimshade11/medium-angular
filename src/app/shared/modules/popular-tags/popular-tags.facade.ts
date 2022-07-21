import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PopularTagsService } from 'src/app/shared/modules/popular-tags/popular-tags.service';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { popularTagsSelector } from 'src/app/shared/modules/popular-tags/store/selectors';
import { isLoadingSelector, errorSelector } from 'src/app/article/store/selectors';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsFacade {
  constructor(private popularTagsService: PopularTagsService, private store: Store) {}

  getPopularTags(): Observable<PopularTagType[]> {
    return this.popularTagsService.getPopularTags();
  }

  getPopularTags$(): Observable<PopularTagType[]> {
    return this.store.pipe(select(popularTagsSelector));
  }

  getIsLoading$(): Observable<boolean> {
    return this.store.pipe(select(isLoadingSelector));
  }

  getErrors$(): Observable<string | null> {
    return this.store.pipe(select(errorSelector));
  }
}
