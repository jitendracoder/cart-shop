import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms';
import{ AuthService } from '../auth.service';
import{Router} from '@angular/router';
import{Subject} from 'rxjs';
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:any;
loggedIn= new Subject<boolean>();
subject;
  constructor(private _formBuilder:FormBuilder,
    private _authservice:AuthService,
    private _router:Router
    ) {
    this.loginform= this._formBuilder.group({
      username:[''],
      password:[''],
      remembar:['']

    });
   }
   ngOnInit() {
  }

 

  login_from(){
    let email = this.loginform.value.username;
    let password= this.loginform.value.password;
    const returnSecureToken =true;
    this._authservice.login(email,password,returnSecureToken).subscribe(
      res=>{
        console.log(res.email);
        
        if(res.localId){
          localStorage.setItem("user",JSON.stringify(res));
          localStorage.setItem("userToken",res.localId)
           //this._router.navigate(['shoppcart']);
          //  this.redirectPath()
        
          let df =this._authservice.token_method();
          this._authservice.isLoggedIn=true;
          if(df){
            
            //this._authservice.subject.next(true);
            this._router.navigate(['shoppcart']);
          }
            
        }
      
      },
      err=>{
        console.log(err);
      }
    )
    
  }

  // redirectPath(){
  
  // }

 

}
