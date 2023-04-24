import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { ArticleComponent } from './components/article/article.component'
import { articleReducer } from 'src/app/article-page-show/store/reducers'
import { ArticleEffects } from 'src/app/article-page-show/store/effects'
import { SharedModule } from '../shared/shared.module'
import { ArticleService } from './services/article.service'


const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([ArticleEffects, ArticleEffects]),
    SharedModule
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService]
})
export class ArticleModule { }
