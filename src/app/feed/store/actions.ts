import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/feed/store/action-types'
import { GetFeedResponseInterface } from '../types/get-feed-fesponse.interface'


export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{url: string}>()
)

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{feed: GetFeedResponseInterface}>()
)

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE)
