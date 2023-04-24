import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UserProfileInterface } from '../types/user-profile.interface'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators'
import { GetUserProfileResponseInterface } from '../types/get-user-profile-response.interface'

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) { }

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`

    return this.http
      .get<GetUserProfileResponseInterface>(url)
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      )
  }
}
