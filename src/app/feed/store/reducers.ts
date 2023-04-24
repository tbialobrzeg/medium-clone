import { createReducer, on, Action } from '@ngrx/store'

import { FeedStateInterface } from 'src/app/feed/types/feed-state.interface'
import { addToFavoritesSuccessAction } from 'src/app/add-to-favorites/store/actions'
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction
} from 'src/app/feed/store/actions'
import { act } from '@ngrx/effects'

const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      data: null,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      data: null,
      isLoading: false
    })
  ),
  on(
    addToFavoritesSuccessAction,
    (state, action): FeedStateInterface => {
      let slug = action.article.slug;
      if (state.data != null && state.data.articles != null) {
        let newArticles = JSON.parse(JSON.stringify(state.data.articles));
        for (let article of newArticles) {
          if (article.slug == slug) {
            article.favorited = action.article.favorited;
            article.favoritesCount = action.article.favoritesCount
          }
        }
        return {
          ...state,
          data: { articles: newArticles, articlesCount: state.data.articlesCount },
          isLoading: false
        }
      }

      return state
    }


  )
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
