import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersistanceService } from "./persistance.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _persistanceService: PersistanceService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this._persistanceService.get("accessToken");
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${token}`
                }
            })
        }

        return next.handle(request);
    }
}