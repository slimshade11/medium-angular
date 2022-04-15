import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { environment } from 'src/environments/environment';
import { GetPopularTagsResponseInterface } from 'src/app/shared/types/GetPopularTagsResponce.interface';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const baseUrl = environment.baseUrl;
    return this.http
      .get(`${baseUrl}/tags`)
      .pipe(map((response: GetPopularTagsResponseInterface) => response.tags));
  }
}
