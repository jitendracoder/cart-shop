import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoginedInSubject=new Subject();

  constructor(private _httpclient:HttpClient) { 
    console.log("constructor called")
    this.token_method()
   
 
    // this.test();
   }
   test(){
    var a=3,b=2,c;
    c =a+b;
    console.log(c)
    //return c
  }

allowLogin:boolean;
public activeUser: any;
isLoggedIn:boolean  = false;


fakeapi():Observable<any>{
  return this._httpclient.get('https://jsonplaceholder.typicode.com/todos/1')
}
login(email,password,returnSecureToken):Observable<any>{
    console.log(email + "" + password);
    const login_api:string=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_Key}`;
    return this._httpclient.post(login_api,{email:email,password:password,returnSecureToken:returnSecureToken}).pipe(map(user => {
     // console.log(user)
     this.token_method()

      return user;
    }));
    
  }

API_Key="AIzaSyBSLU90zY_HbcSIvhAAFKrMIBfuxIIK6UU";
formRegister(email,password,returnSecureToken):Observable<any>{
  console.log(email)
  const register_api:string= `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_Key}`;
  return this._httpclient.post(register_api,{email:email,password:password,returnSecureToken:returnSecureToken});

}


token_method(){
  //this.activeUser = JSON.parse(localStorage.getItem("user"));
  this.activeUser=localStorage.getItem("userToken")

  let currentUser={
    //localId:this.activeUser.email
  }
  //console.log(this.activeUser.localId)
  // if(this.activeUser){
  //   return this.allowLogin = true;
  // }
  if(this.activeUser){
    this.isLoggedIn= true;
    console.log("this is if" + "" + this.isLoggedIn);
    this.isLoginedInSubject.next(true);
    return this.allowLogin = true;
  }
  else{
    return this.allowLogin =false;
  }
}

}
