import { createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/auth-state.interface";
import {
    getCurrentUserAction,
    getCurrentUserFailureAction,
    getCurrentUserSuccessAcion,
    loginAction,
    loginFailureAction,
    loginSuccessAcion,
    registerAction,
    registerFailureAction,
    registerSuccessAction,
    updateCurrentUserSuccessAction,
    logoutAction
} from "./actions";


const initialstate: AuthStateInterface = {
    isSubmiting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
}

export const authReducer = createReducer(initialstate,
    on(registerAction, (state): AuthStateInterface =>
    ({
        ...state,
        isSubmiting: true,
        validationErrors: null
    })
    ),
    on(loginAction, (state): AuthStateInterface =>
    ({
        ...state,
        isSubmiting: true,
        validationErrors: null
    })
    ),
    on(registerSuccessAction, (state, action): AuthStateInterface =>
    ({
        ...state,
        isSubmiting: false,
        isLoggedIn: true,
        validationErrors: null,
        currentUser: action.currentUser
    })
    ),
    on(loginSuccessAcion, (state, action): AuthStateInterface =>
    ({
        ...state,
        isSubmiting: false,
        isLoggedIn: true,
        validationErrors: null,
        currentUser: action.currentUser
    })
    ),
    on(registerFailureAction, (state, action): AuthStateInterface =>
    ({
        ...state,
        isSubmiting: false,
        isLoggedIn: false,
        currentUser: null,
        validationErrors: action.errors

    })
    ),
    on(loginFailureAction, (state, action): AuthStateInterface =>
    ({
        ...state,
        isSubmiting: false,
        isLoggedIn: false,
        currentUser: null,
        validationErrors: action.errors

    })
    ),
    on(getCurrentUserAction, (state): AuthStateInterface =>
    ({
        ...state,
        isSubmiting: true,
        isLoggedIn: null,
        validationErrors: null,
        currentUser: null
    })
    ),
    on(getCurrentUserSuccessAcion, (state, action): AuthStateInterface =>
    ({
        ...state,
        isSubmiting: false,
        isLoggedIn: true,
        validationErrors: null,
        currentUser: action.currentUser
    })
    ),
    on(getCurrentUserFailureAction, (state, action): AuthStateInterface =>
    ({
        ...state,
        isSubmiting: false,
        isLoggedIn: false,
        currentUser: null
    })
    ),
    on(
        updateCurrentUserSuccessAction,
        (state, action): AuthStateInterface => ({
            ...state,
            currentUser: action.currentUser
        })
    ),
    on(
        logoutAction,
        (state): AuthStateInterface => ({
            ...state,
            ...initialstate,
            isLoggedIn: false
        })
    )
);