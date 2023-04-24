import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { of } from 'rxjs'

import {
  updateArticleAction,
  updateArticleSuccessAction,
  updateArticleFailureAction,
  deleteArticleSuccessAction,
  deleteArticleFailureAction,
  deleteArticleAction
} from './actions'
import { EditArticleService } from '../services/edit-article.service'
import { ArticleService } from 'src/app/article-page-show/services/article.service'
import { ArticleInterface } from 'src/app/article-page-show/types/article.interface'

@Injectable()
export class ArticleEffects {


  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArticleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({ article })
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction()
          }),

          catchError(() => {
            return of(deleteArticleFailureAction())
          })
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        })
      ),
    { dispatch: false }
  )

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private articleService: ArticleService,
    private router: Router
  ) { }
}
