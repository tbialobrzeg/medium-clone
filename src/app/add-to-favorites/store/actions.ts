import {createAction, props} from '@ngrx/store'
import { ArticleInterface } from 'src/app/article-page-show/types/article.interface';
import {ActionTypes} from 'src/app/add-to-favorites/store/action-types'


export const addToFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{isFavorited: boolean; slug: string}>()
)

export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{article: ArticleInterface}>()
)
export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
)
