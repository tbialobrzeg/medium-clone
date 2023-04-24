import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { CurrentUserInterface } from "src/app/auth-pages/types/current-user.interface";
import { RegisterRequestInterface } from "../types/register-request.interface";
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/auth-response.interface";
import { LoginRequestInterface } from "../types/login-request.interface";
import { CurrentUserInputInterface } from "../types/current-user-input.interface";

@Injectable()
export class AuthService {

    constructor(private _http: HttpClient) { }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        return this._http
            .post<AuthResponseInterface>(environment.apiUrl + "/users", data)
            .pipe(map((data: AuthResponseInterface) => data.user));
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        return this._http
            .post<AuthResponseInterface>(environment.apiUrl + "/users/login", data)
            .pipe(map((data: AuthResponseInterface) => data.user));
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        return this._http
            .get<AuthResponseInterface>(environment.apiUrl + "/user")
            .pipe(map((data: AuthResponseInterface) => data.user));
    }

    updateCurrentUser(
        currentUserData: CurrentUserInputInterface
    ): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/user'
        return this._http.put<AuthResponseInterface>(url, { user: currentUserData }).pipe(map((data: AuthResponseInterface) => data.user))
    }

}