import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CreateArticleComponent} from 'src/app/article-page-create/components/createArticle/createArticle.component'
import {RouterModule} from '@angular/router'
import {CreateArticleService} from 'src/app/article-page-create/services/create-article.service'
import {EffectsModule} from '@ngrx/effects'
import {CreateArticleEffect} from './store/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from 'src/app/article-page-create/store/reducers'
import { IsLoggedInAuthGuardService } from '../shared/services/is-logged-in-auth-guard.service'
import { ArticleFormComponent } from './components/articleForm/articleForm.component'
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
    canActivate: [IsLoggedInAuthGuardService]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers)
  ],
  declarations: [CreateArticleComponent, ArticleFormComponent],
  providers: [CreateArticleService],
  exports: [ArticleFormComponent]
})
export class CreateArticleModule {}
