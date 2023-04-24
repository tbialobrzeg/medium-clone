import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PopularTagsModule } from '../popular-tags/popular-tags.module';
import { FeedTogglerModule } from '../feed-toggler/feed-toggler.module';
import { FeedModule } from '../feed/feed.module';

const routes: Routes = [
  {
    path: "", component: FeedPageComponent,
  }
]


@NgModule({
  declarations: [
    FeedPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    PopularTagsModule,
    FeedTogglerModule,
    FeedModule
  ]
})
export class FeedPageModule { }
