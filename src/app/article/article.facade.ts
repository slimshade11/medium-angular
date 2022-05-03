import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { deleteArticleAction, getArticleAction } from 'src/app/article/store/article.actions';
import { errorSelector, isLoadingSelector, articleSelector } from 'src/app/article/store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { ArticleApi } from 'src/app/article/article.api';

@Injectable({
  providedIn: 'root',
})
export class ArticleFacade {
  error$ = this.store.select(errorSelector);
  isLoading$ = this.store.select(isLoadingSelector);
  article$ = this.store.select(articleSelector);
  currentUser$ = this.store.select(currentUserSelector);

  constructor(
    private articleService: ArticleService,
    private store: Store,
    private articleApi: ArticleApi
  ) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    return this.articleService.getArticle(slug);
  }

  fetchArticle(slug: string): void {
    this.store.dispatch(getArticleAction({ slug }));
  }

  deleteArticle(slug: string): Observable<{}> {
    return this.articleApi.deleteArticle(slug);
  }

  onDeleteArticleClick(slug: string): void {
    this.store.dispatch(deleteArticleAction({ slug }));
  }
}
