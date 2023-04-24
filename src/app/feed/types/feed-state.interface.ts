import { GetFeedResponseInterface } from "./get-feed-fesponse.interface"


export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedResponseInterface | null
}
