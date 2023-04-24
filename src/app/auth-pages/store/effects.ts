import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, tap, switchMap } from "rxjs";
import { AuthService } from "../services/auth.service";
import {
    getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAcion,
    loginAction, loginFailureAction, loginSuccessAcion, logoutAction, registerAction,
    registerFailureAction, registerSuccessAction, updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction
} from "./actions";
import { CurrentUserInterface } from "src/app/auth-pages/types/current-user.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";
import { PersistanceService } from "../services/persistance.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    constructor(
        private _actions$: Actions,
        private _authService: AuthService,
        private _persistanceService: PersistanceService,
        private _router: Router) { }

    register$ = createEffect(() => this._actions$.pipe(
        ofType(registerAction),
        switchMap(({ user }) => {
            return this._authService.register({ user }).pipe(
                map((currentUser: CurrentUserInterface) => {
                    this._persistanceService.set("accessToken", currentUser.token);
                    return registerSuccessAction({ currentUser })
                }),
                catchError((errorsResponse: HttpErrorResponse) => {
                    return of(registerFailureAction({ errors: errorsResponse.error.errors as BackendErrorsInterface }));
                })
            )
        }
        ))
    )

    login$ = createEffect(() => this._actions$.pipe(
        ofType(loginAction),
        switchMap(({ user }) => {
            return this._authService.login({ user }).pipe(
                map((currentUser: CurrentUserInterface) => {
                    this._persistanceService.set("accessToken", currentUser.token);
                    return loginSuccessAcion({ currentUser })
                }),
                catchError((errorsResponse: HttpErrorResponse) => {
                    return of(loginFailureAction({ errors: errorsResponse.error.errors as BackendErrorsInterface }));
                })
            )
        }))
    )

    getCurrentUser$ = createEffect(() => this._actions$.pipe(
        ofType(getCurrentUserAction),
        switchMap(() => {

            const userToken = this._persistanceService.get("accessToken");
            if (!userToken) return of(getCurrentUserFailureAction());

            return this._authService.getCurrentUser().pipe(
                map((currentUser: CurrentUserInterface) => {
                    return getCurrentUserSuccessAcion({ currentUser })
                }),
                catchError((errorsResponse: HttpErrorResponse) => {
                    return of(getCurrentUserFailureAction());
                })
            )
        }))
    )

    updateCurrentUser$ = createEffect(() => this._actions$.pipe(
        ofType(updateCurrentUserAction),
        switchMap((currentUser) => {
            return this._authService.updateCurrentUser(currentUser.currentUserInput).pipe(
                map((currentUser: CurrentUserInterface) => {
                    return updateCurrentUserSuccessAction({ currentUser })
                }),
                catchError((errorsResponse: HttpErrorResponse) => {
                    return of(updateCurrentUserFailureAction({ errors: errorsResponse.error.errors as BackendErrorsInterface }));
                })
            )
        }))
    )

    logout$ = createEffect(() => this._actions$.pipe(
        ofType(logoutAction),
        tap(() => {
            this._persistanceService.remove("accessToken")
        })
    ),
        { dispatch: false }
    )

    redirectAfterSuccess$ = createEffect(() => this._actions$.pipe(
        ofType(registerSuccessAction, loginSuccessAcion, logoutAction, updateCurrentUserAction),
        tap(() => {
            this._router.navigateByUrl("/")
        })
    ),
        { dispatch: false }
    )
}