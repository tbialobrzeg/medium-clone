import { Component, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { Store, select } from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store/selectors'
import { createArticleAction, createArticleReset } from '../../store/actions'
import { ArticleInputInterface } from 'src/app/article-page-show/types/article-input.interface'

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss']
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.store.dispatch(createArticleReset())
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }))
  }
}
