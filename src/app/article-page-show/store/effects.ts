import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'

import { ArticleService } from 'src/app/article-page-show/services/article.service'
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction
} from 'src/app/article-page-show/store/actions'
import { Router } from '@angular/router'
import { ArticleInterface } from '../types/article.interface'


@Injectable()
export class ArticleEffects {


  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article })
          }),
          catchError(() => {
            return of(getArticleFailureAction())
          })
        )
      })
    )
  )



  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router
  ) { }
}
