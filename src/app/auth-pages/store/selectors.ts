import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/auth-state.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isSubmitingSelector = createSelector(authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmiting);

export const validationErrorsSelector = createSelector(authFeatureSelector,
    (authState: AuthStateInterface) => authState.validationErrors)

export const isLoggedInSelector = createSelector(authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn)

export const isAnonymusSelector = createSelector(authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn === false)

export const currentUserSelector = createSelector(authFeatureSelector,
    (authState: AuthStateInterface) => authState.currentUser)