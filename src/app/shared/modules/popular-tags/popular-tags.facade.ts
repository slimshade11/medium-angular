import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PopularTagsService } from 'src/app/shared/modules/popular-tags/popular-tags.service';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsFacade {
  constructor(private popularTagsService: PopularTagsService) {}

  getPopularTags(): Observable<PopularTagType[]> {
    return this.popularTagsService.getPopularTags();
  }
}
