import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService {
    constructor(private tokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let inReq = req;
        const token = this.tokenService.getToken();
        if(token != null){
            inReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
        }
        return next.handle(inReq);
    }
}

export const interceptorProvider = [{
    provider: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];