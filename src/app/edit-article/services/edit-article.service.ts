import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleInterface } from '@shared/types/article.interface';
import { ArticleInputInterface } from '@shared/types/articleInput.interface';
import { SaveArticleResponseInterface } from '@shared/types/saveArticleResponse.interface';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EditArticleService {
  constructor(private http: HttpClient) {}

  editArticle(slug: string, articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    const fullUrl = `${environment.baseUrl}/articles/${slug}`;

    return this.http.put<SaveArticleResponseInterface>(fullUrl, articleInput).pipe(
      map((response: SaveArticleResponseInterface) => {
        return response.article;
      })
    );
  }
}
