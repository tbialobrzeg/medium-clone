import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {YourFeedComponent} from 'src/app/your-feed-page/components/yourFeed/yourFeed.component'
import {FeedModule} from 'src/app/feed/feed.module'
import {PopularTagsModule} from '../popular-tags/popular-tags.module'
import {FeedTogglerModule} from 'src/app/feed-toggler/feed-toggler.module'
import { SharedModule } from '../shared/shared.module'
import { IsLoggedInAuthGuardService } from '../shared/services/is-logged-in-auth-guard.service'

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
    canActivate: [IsLoggedInAuthGuardService]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FeedModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  declarations: [YourFeedComponent]
})
export class YourFeedModule {}
