import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { getArticleAction } from 'src/app/article-page-show/store/actions'
import { ActivatedRoute } from '@angular/router'
import { Subscription, Observable, combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'
import {
  articleSelector,
  isLoadingSelector,
  errorSelector
} from 'src/app/article-page-show/store/selectors'
import { currentUserSelector } from 'src/app/auth-pages/store/selectors'
import { CurrentUserInterface } from 'src/app/auth-pages/types/current-user.interface'
import { ArticleInterface } from '../../types/article.interface'
import { deleteArticleAction } from 'src/app/article-page-edit/store/actions'

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug!: string
  article!: ArticleInterface | null
  articleSubscription!: Subscription
  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>
  isAuthor$!: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || ""
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))]
    ).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) {
            return false
          }
          return currentUser.username === article.author.username
        }
      )
    )
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article
      })
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }))
  }
}