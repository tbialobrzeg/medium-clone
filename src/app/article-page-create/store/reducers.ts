import {CreateArticleStateInterface} from '../types/create-article-state.interface'
import {createReducer, on, Action} from '@ngrx/store'
import {
  createArticleAction,
  createArticleSuccessAction,
  createArticleFailureAction,
  createArticleReset
} from './actions'

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null
}

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors : null
    })
  ),
  on(
    createArticleReset,
    (state): CreateArticleStateInterface => ({
      ...state,
      ...initialState
    })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors : null
    })
  ),

  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action)
}
