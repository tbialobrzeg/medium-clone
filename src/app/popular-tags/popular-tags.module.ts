import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'

import {reducers} from 'src/app/popular-tags/store/reducers'
import {GetPopularTagsEffect} from 'src/app/popular-tags/store/effects'
import {PopularTagsComponent} from 'src/app/popular-tags/components/popularTags/popularTags.component'
import {PopularTagsService} from 'src/app/popular-tags/services/popular-tags.service'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    SharedModule
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}
