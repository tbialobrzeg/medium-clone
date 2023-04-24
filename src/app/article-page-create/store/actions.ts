import { createAction, props } from '@ngrx/store'
import { ActionTypes } from './actions-types'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { ArticleInputInterface } from 'src/app/article-page-show/types/article-input.interface'
import { ArticleInterface } from 'src/app/article-page-show/types/article.interface'


export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
)

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)

export const createArticleReset = createAction(
  ActionTypes.CREATE_ARTICLE_RESET
)
