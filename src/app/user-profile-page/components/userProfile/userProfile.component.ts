import {Component, OnInit} from '@angular/core'
import {UserProfileInterface} from '../../types/user-profile.interface'
import {Observable, Subscription, combineLatest} from 'rxjs'
import {Store, select} from '@ngrx/store'
import {getUserProfileAction} from '../../store/actions'
import {ActivatedRoute, Router, Params} from '@angular/router'
import {
  isLoadingSelector,
  errorSelector,
  userProfileSelector
} from '../../store/selectors'
import {currentUserSelector} from 'src/app/auth-pages/store/selectors'
import {map, filter} from 'rxjs/operators'
import {CurrentUserInterface} from 'src/app/auth-pages/types/current-user.interface'

@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile!: UserProfileInterface | null
  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>
  userProfileSubscription!: Subscription
  slug!: string
  isCurrentUserProfile$!: Observable<boolean>

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }
  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || ""
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isCurrentUserProfile$ = combineLatest(
      [this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))]
    ).pipe(
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface,
          UserProfileInterface
        ]) => {
          return currentUser.username === userProfile.username
        }
      )
    )
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites')
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: UserProfileInterface | null) => {
        this.userProfile = userProfile
      })

    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug']
      this.fetchUserProfile()
    })
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }
}
