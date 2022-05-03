import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { getArticleAction } from 'src/app/article/store/actions/article.actions';
import { errorSelector, isLoadingSelector, articleSelector } from 'src/app/article/store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';

@Injectable({
  providedIn: 'root',
})
export class ArticleFacade {
  error$ = this.store.select(errorSelector);
  isLoading$ = this.store.select(isLoadingSelector);
  article$ = this.store.select(articleSelector);
  currentUser$ = this.store.select(currentUserSelector);

  constructor(private articleService: ArticleService, private store: Store) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    return this.articleService.getArticle(slug);
  }

  fetchArticle(slug: string): void {
    this.store.dispatch(getArticleAction({ slug }));
  }
}
