import { ArticleInterface } from "src/app/article-page-show/types/article.interface"


export interface GetFeedResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
