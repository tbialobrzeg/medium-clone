import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { editArticleReducer } from 'src/app/article-page-edit/store/reducers'
import { EditArticleComponent } from './components/editArticle/editArticle.component'
import { ArticleEffects } from './store/effects'
import { EditArticleService } from 'src/app/article-page-edit/services/edit-article.service'
import { SharedModule } from '../shared/shared.module'
import { ArticleService } from '../article-page-show/services/article.service'
import { IsLoggedInAuthGuardService } from '../shared/services/is-logged-in-auth-guard.service'
import { CreateArticleModule } from '../article-page-create/create-article.module'

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
    canActivate: [IsLoggedInAuthGuardService]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ArticleEffects]),
    StoreModule.forFeature('editArticle', editArticleReducer),
    CreateArticleModule
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, ArticleService]
})
export class EditArticleModule { }
