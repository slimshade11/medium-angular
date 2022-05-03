import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { getArticleAction } from './store/actions/article.actions';

@Injectable({
  providedIn: 'root',
})
export class ArticleFacade {
  constructor(private acrticleService: ArticleService, private store: Store) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    return this.acrticleService.getArticle(slug);
  }

  fetchArticle(slug: string): void {
    this.store.dispatch(getArticleAction({ slug: slug }));
  }
}
