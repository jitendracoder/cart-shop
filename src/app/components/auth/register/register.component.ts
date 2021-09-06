import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  resgisterForm:any;
  constructor(
    private _fb:FormBuilder,
    private _authService:AuthService
    ) { }

  ngOnInit() {
     this.resgisterForm = this._fb.group({
      username:[''],
      password:[''],
      remembar:['']
     });

     
  }

  register(){
    let email = this.resgisterForm.value.username;
    let password = this.resgisterForm.value.password;
    const returnSecureToken:boolean = true;
    this._authService.formRegister(email,password,returnSecureToken).subscribe(
      res=>{
      console.log("res block called");
      console.log(res);

     },
     err=>{
       console.log("err block called")
       console.log(err);
     }
     )
   
  }

}
