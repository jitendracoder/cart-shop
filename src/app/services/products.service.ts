import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
product:any[]=[
  {id:1,imageUrl:'',price:200,discription:'test1'},
  {id:2,imageUrl:'',price:300,discription:'test2'},
  {id:3,imageUrl:'',price:400,discription:'test3'},
  {id:4,imageUrl:'',price:500,discription:'test4'},
  {id:5,imageUrl:'',price:500,discription:'test5'}
]
  constructor() { }
}
