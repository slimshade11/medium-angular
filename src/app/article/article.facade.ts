import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleFacade {
  getArticleAction(slug: string): any {
    throw new Error('Method not implemented.');
  }
  constructor(private acrticleService: ArticleService) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    return this.acrticleService.getArticle(slug);
  }
}
