import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ArticleInterface } from '@shared/types/article.interface';
import { FormGroup } from '@angular/forms';
import { ArticleInputInterface } from '@shared/types/articleInput.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';
import { ArticleFormService } from '@shared/modules/article-form/article-form.service';
import { takeUntil, tap } from 'rxjs/operators';
import { DestroyComponent } from '@shared/modules/destroy/destroy/destroy.component';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent extends DestroyComponent implements OnInit, OnDestroy {
  @Input() initialValues: ArticleInputInterface;
  @Input() isSubmitting: boolean;
  @Input() errors: BackendErrorsInterface | null;

  @Output() articleSubmitEvent: EventEmitter<ArticleInterface> =
    new EventEmitter<ArticleInterface>();

  form: FormGroup;

  constructor(private articleFormService: ArticleFormService) {
    super();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.articleFormService.buildArticleForm(this.initialValues);

    this.articleFormService
      .getArticleForm$()
      .pipe(
        tap((form) => (this.form = form)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
