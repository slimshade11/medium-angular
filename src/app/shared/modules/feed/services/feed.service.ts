import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { environment } from '../../../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getFeed$(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = this.baseUrl + url;
    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }
}
