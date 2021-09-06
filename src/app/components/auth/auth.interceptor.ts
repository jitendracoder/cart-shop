import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next:HttpHandler){
        //const token: string = localStorage.getItem('token');
        const token="this token"
        const newclone= request.clone({setHeaders:{Authorization:token}})
       // console.log("interceptor called");
        let gettoken = localStorage.getItem("token1");
       // console.log(gettoken);
       // console.log(request.headers.has('Content-Type'));
        return next.handle(newclone);
    }

}