import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/components/auth/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService:AuthService, private _router:Router) { 
    console.log("header called")
  }
  isLoggedIn:boolean;
  isLoggedIn1;
  ngOnInit() {
    //this.isLoggedIn1=this._authService.subject;
   // this.isLoggedIn =this._authService.isLoggedIn
   this._authService.isLoginedInSubject.subscribe(res=>{
   this.isLoggedIn1= res 

   } )
    console.log("this header" + "" + this.isLoggedIn)
  }

 // isLoggedIn:boolean = false;
 logOut(){
   localStorage.removeItem("user");
   localStorage.removeItem("userToken");
   localStorage.clear();
   this._authService.isLoginedInSubject.next(false);
   this._router.navigate(['/login']);
   
 }

}
