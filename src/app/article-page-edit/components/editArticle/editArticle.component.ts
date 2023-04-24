import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
  isLoadingSelector,
  articleSelector
} from '../../store/selectors'
import { ActivatedRoute } from '@angular/router'
import { filter, map } from 'rxjs/operators'
import { updateArticleAction } from 'src/app/article-page-edit/store/actions'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { ArticleInputInterface } from 'src/app/article-page-show/types/article-input.interface'
import { ArticleInterface } from 'src/app/article-page-show/types/article.interface'
import { getArticleAction } from 'src/app/article-page-show/store/actions'

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss']
})
export class EditArticleComponent implements OnInit {
  initialValues$!: Observable<ArticleInputInterface>
  isSubmitting$!: Observable<boolean>
  isLoading$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorsInterface | null>
  slug!: string

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initialValues()
    this.fetchData()
  }

  initialValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || ""
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        }
      })
    )
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }))
  }
}
