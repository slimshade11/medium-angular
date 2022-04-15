import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PopularTagsService } from 'src/app/shared/modules/popular-tags/popular-tags.service';
import { PopularTag } from 'src/app/shared/types/popularTag.type';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsFacade {
  constructor(private popularTagsService: PopularTagsService) {}

  getPopularTags(): Observable<PopularTag[]> {
    return this.popularTagsService.getPopularTags();
  }
}
