import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import { GetFeedResponseInterface } from '../types/get-feed-fesponse.interface'

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url
    return this.http.get<GetFeedResponseInterface>(fullUrl)
  }
}
