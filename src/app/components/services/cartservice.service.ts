import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(private http:HttpClient) { }
 cartItems(cartData):Observable<any>{
console.log(cartData);
    const url:string = `${environment.apiUrl}/cart_arry`;
    return this.http.post(url, cartData).pipe(res=>{
      console.log(res);
      return res;
    })
  }
  cartItemsGet():Observable<any>{
    
        const url:string = `${environment.apiUrl}/cart_arry`;
        return this.http.get(url).pipe(res=>{
          console.log(res);
          return res;
        })
      }
  // cartItemsQuty(cartData):Observable<any>{
  //   console.log(cartData);
  //       const url:string = `${environment.apiUrl}/cart_arry`;
  //       return this.http.post(url, cartData).pipe(res=>{
  //         console.log(res);
  //         return res;
  //       })
  //     }
}
