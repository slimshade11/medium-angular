import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ArticleInputInterface } from '@shared/types/articleInput.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '@create-article/store/selectors';
import { validationErrorsSelector } from '@create-article/store/selectors';
import { createArticleAction } from '../store/actions/createArticle.action';

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
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = initialArticleInputValues;

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.backendErrors$ = this.store.select(validationErrorsSelector);
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
