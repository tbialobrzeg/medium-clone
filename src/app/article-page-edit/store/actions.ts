import {createAction, props} from '@ngrx/store'
import {ActionTypes} from './actions-types'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { ArticleInputInterface } from 'src/app/article-page-show/types/article-input.interface'
import { ArticleInterface } from 'src/app/article-page-show/types/article.interface'

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{slug: string; articleInput: ArticleInputInterface}>()
)

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)

export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{ slug: string }>()
)

export const deleteArticleSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
)

export const deleteArticleFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE
)