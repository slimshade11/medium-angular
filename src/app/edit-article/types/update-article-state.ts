import { ArticleStateInterface } from '@article/types/articleState.interface';
import { BackendErrorsInterface } from '@shared/types/backendErrors.interface';

export interface UpdateArticleState {
  article: ArticleStateInterface | null;
  isLoading: boolean;
  isSubmitting: boolean;
  backendErrors: BackendErrorsInterface | null;
}
