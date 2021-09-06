import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  _getProductList():Observable<any>{
    const url:string=`${environment.apiUrl}/products`;
    return this.http.get(url).pipe(res=>{
      return res;
    })
  }
}
