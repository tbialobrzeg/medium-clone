import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { isLoggedInSelector } from 'src/app/auth-pages/store/selectors'

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feedToggler.component.html'
})
export class FeedTogglerComponent implements OnInit {
  @Input()
  tagName!: string

  isLoggedIn$!: Observable<boolean | null>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
