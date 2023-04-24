import { UserProfileInterface } from 'src/app/user-profile-page/types/user-profile.interface'
import {PopularTagType} from '../../popular-tags/types/popular-tag.type'


export interface ArticleInterface {
  title: string
  slug: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: PopularTagType[]
  description: string
  author: UserProfileInterface
  favorited: boolean
  favoritesCount: number
}
