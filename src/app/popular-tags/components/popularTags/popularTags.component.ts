import {Component, OnInit} from '@angular/core'
import {Store, select} from '@ngrx/store'

import {getPopularTagsAction} from 'src/app/popular-tags/store/actions'
import {Observable} from 'rxjs'

import {
  popularTagsSelector,
  isLoadingSelector,
  errorSelector
} from 'src/app/popular-tags/store/selectors'
import { PopularTagType } from '../../types/popular-tag.type'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html'
})
export class PopularTagsComponent implements OnInit {
  popularTags$!: Observable<PopularTagType[] | null>
  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
