import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {TagFeedComponent} from 'src/app/tag-feed/components/tagFeed/tagFeed.component'
import {PopularTagsModule} from '../popular-tags/popular-tags.module'
import {FeedTogglerModule} from 'src/app/feed-toggler/feed-toggler.module'
import { SharedModule } from '../shared/shared.module'
import { FeedModule } from '../feed/feed.module'

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PopularTagsModule,
    FeedTogglerModule,
    SharedModule,
    FeedModule
  ],
  declarations: [TagFeedComponent]
})
export class TagFeedModule {}
