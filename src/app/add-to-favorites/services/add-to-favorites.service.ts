import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators'
import { ArticleInterface } from 'src/app/article-page-show/types/article.interface'
import { GetArticleResponseInterface } from 'src/app/article-page-show/types/get-article-response.interface'

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) { }

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)

    return this.http.post<GetArticleResponseInterface>(url, {}).pipe(map(response => response.article))
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)

    return this.http.delete<GetArticleResponseInterface>(url).pipe(map(response => response.article))
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

}
