import { Component } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from '../app/components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 // user:{};
  user:{};

  // constructor(private _authservice:AuthService) { 
  //   // let tests = localStorage.getItem("user");
  //   // this.user = JSON.parse(tests)
    
    
  //   // if(this.user){ 
  //   //   console.log("enter if");
  //   //   this._authservice.allowLogin = true;
  //   // }
  //   // else{
  //   //   console.log("enter else");
  //   //   this._authservice.allowLogin = false;
  //   // }
    
  //  }
  title = 'cart';
}
