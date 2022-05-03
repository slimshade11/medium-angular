import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';

import { ArticleFacade } from 'src/app/article/article.facade';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  slug: string = this.route.snapshot.paramMap.get('slug');

  article$: Observable<ArticleInterface> = this.articleFacade.article$;
  error$: Observable<string | null> = this.articleFacade.error$;
  isLoading$: Observable<boolean> = this.articleFacade.isLoading$;
  isAuthor$: Observable<boolean> = this.getIsAuthor();

  constructor(private articleFacade: ArticleFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.articleFacade.fetchArticle(this.slug);
  }

  getIsAuthor(): Observable<boolean> {
    return combineLatest([this.article$, this.articleFacade.currentUser$]).pipe(
      map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
        if (!article || !currentUser) {
          return false;
        }
        return currentUser.username === article.author.username;
      })
    );
  }
}
