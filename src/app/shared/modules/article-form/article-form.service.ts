import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';

@Injectable()
export class ArticleFormService {
  private articleForm$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);

  constructor(private fb: FormBuilder) {}

  buildArticleForm(initialValues: ArticleInputInterface): void {
    this.articleForm$.next(
      this.fb.group({
        title: initialValues.title,
        description: initialValues.description,
        body: initialValues.body,
        tagList: initialValues.tagList.join(' '),
      })
    );
  }

  getArticleForm$(): Observable<FormGroup> {
    return this.articleForm$.asObservable();
  }
}
