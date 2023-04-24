import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";
import { CurrentUserInterface } from "src/app/auth-pages/types/current-user.interface";
import { CurrentUserInputInterface } from "../types/current-user-input.interface";
import { LoginRequestInterface } from "../types/login-request.interface";
import { RegisterRequestInterface } from "../types/register-request.interface";
import { ActionTypes } from "./actions-types";


export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<RegisterRequestInterface>());

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>());

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ errors: BackendErrorsInterface }>());


export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<LoginRequestInterface>());

export const loginSuccessAcion = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>());

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ errors: BackendErrorsInterface }>());


export const getCurrentUserAction = createAction(
    ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAcion = createAction(
    ActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>());

export const getCurrentUserFailureAction = createAction(
    ActionTypes.GET_CURRENT_USER_FAILURE);

export const updateCurrentUserAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER,
    props<{ currentUserInput: CurrentUserInputInterface }>()
)

export const updateCurrentUserSuccessAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
)

export const updateCurrentUserFailureAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)

export const logoutAction = createAction(ActionTypes.LOGOUT)