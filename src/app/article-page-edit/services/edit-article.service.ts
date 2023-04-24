import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { ArticleInputInterface } from 'src/app/article-page-show/types/article-input.interface'
import { ArticleInterface } from 'src/app/article-page-show/types/article.interface'
import { SaveArticleResponseInterface } from 'src/app/article-page-show/types/save-article-response.interface'

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) { }

  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http
      .put<SaveArticleResponseInterface>(fullUrl, { article: articleInput })
      .pipe(
        map((response: SaveArticleResponseInterface) => {
          return response.article
        })
      )
  }
}
