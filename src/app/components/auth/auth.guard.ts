import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import {AuthService} from './auth.service';
import{Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService:AuthService, private _router:Router){
   
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
  
    let tessss  = this._authService.allowLogin
    console.log(tessss);
    if(tessss){
      console.log("guard if called")
     
      return true;
    }
    else{

      console.log("guard else called")
      this._router.navigate(['login']);
      return false;
    }
  
    
     
          
  }
  
}
