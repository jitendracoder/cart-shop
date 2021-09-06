import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
product_detail;
_subject = new Subject();
  constructor() { }
  getproduct(product_detail){
       console.log(product_detail)
      return this._subject.next(product_detail);
     
  }
}
