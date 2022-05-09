import { Component } from '@angular/core';

import { ArticleInputInterface } from '@shared/types/articleInput.interface';

const initialArticleInputValues: ArticleInputInterface = {
  title: '',
  description: '',
  body: '',
  tagList: [],
};

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent {
  initialValues: ArticleInputInterface = initialArticleInputValues;

  onSubmit(res: any): void {
    console.log('res', res);
  }
}
