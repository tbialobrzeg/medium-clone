import { createReducer, on, Action } from '@ngrx/store'
import { EditArticleStateInterface } from 'src/app/article-page-edit/types/edit-article-state.interface'
import {
  updateArticleAction,
  updateArticleSuccessAction,
  updateArticleFailureAction
} from 'src/app/article-page-edit/store/actions'
import {getArticleSuccessAction} from 'src/app/article-page-show/store/actions'


const initialState: EditArticleStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null
}

export const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      article: action.article
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article : action.article
    })
  ),
)


