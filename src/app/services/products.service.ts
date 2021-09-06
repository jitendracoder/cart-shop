import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
product:any[]=[
  {id:1,imageUrl:'',price:1200,discription:'test1'},
  {id:2,imageUrl:'',price:300,discription:'test2'},
  {id:3,imageUrl:'',price:400,discription:'test3'},
  {id:4,imageUrl:'',price:500,discription:'test4'},
  {id:5,imageUrl:'',price:500,discription:'test5'}
]
  constructor(private http:HttpClient) { }

  _getProductList():Observable<any>{
    const url:string = `${environment.apiUrl}/products`
    return this.http.get(url).pipe(res=>{
      return res;
     
    })
  }
}
