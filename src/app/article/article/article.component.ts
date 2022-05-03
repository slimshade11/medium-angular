import { Component, OnInit } from '@angular/core';

import { ArticleFacade } from 'src/app/article/article.facade';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(private articleFacade: ArticleFacade) {}

  ngOnInit(): void {
    this.articleFacade.fetchArticle('');
  }
}
