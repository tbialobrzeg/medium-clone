import { createReducer, on } from '@ngrx/store'
import { ArticleStateInterface } from 'src/app/article-page-show/types/article-state.interface'
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction
} from 'src/app/article-page-show/store/actions'

const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

export const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
      data: null
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: null
    })
  )
)
