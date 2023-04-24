import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'

import {FeedComponent} from 'src/app/feed/components/feed/feed.component'
import {FeedService} from 'src/app/feed/services/feed.service'
import {GetFeedEffect} from 'src/app/feed/store/effects'
import {reducers} from 'src/app/feed/store/reducers'
import {AddToFavoriteModule} from '../add-to-favorites/add-to-favorites.module'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    AddToFavoriteModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {}
