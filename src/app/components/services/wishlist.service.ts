import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getAddedWishLists():Observable<any>{
    const url:string = `${environment.apiUrl}/wishlist`;
    return this.http.get(url);

  }

  addToWishList(products):Observable<any>{
    console.log(products);
    
    const url:string = `${environment.apiUrl}/wishlist`;
    return this.http.post(url,products);

  }

  deleteToWishList(products):Observable<any>{
   
    const url:string = `${environment.apiUrl}/wishlist/${products.id}`;
    return this.http.delete(url,products.id);

  }
}
