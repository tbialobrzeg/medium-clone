import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { GetPopularTagsResponseInterface } from '../types/get-popular-tags-response.interface'
import { PopularTagType } from '../types/popular-tag.type'


@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) { }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'
    return this.http.get<GetPopularTagsResponseInterface>(url).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags
      })
    )
  }
}
