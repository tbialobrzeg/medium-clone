import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";
import { CurrentUserInterface } from "src/app/auth-pages/types/current-user.interface";

export interface AuthStateInterface {
    isSubmiting: boolean,
    currentUser: CurrentUserInterface | null,
    isLoggedIn : boolean | null,
    validationErrors : BackendErrorsInterface | null
}