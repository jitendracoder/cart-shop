import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/components/services/message.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private _Msg:MessageService) { }
  cart_item_detail=[]
  cart_arry:any =[];
  arry_value_store:any;
  ngOnInit() {
    this._Msg._subject.subscribe(res=>{
      this.arry_value_store = res;
     
      this.cart_arry.push(this.arry_value_store);
     
      console.log(this.arry_value_store.id);
      console.log(this.cart_arry);
      console.log(this.cart_arry.id);
      for(let i in this.cart_arry){
        console.log(i);
      }
      // for(this.cart_arry.id; this.cart_arry = this.cart_arry.id; this.cart_arry.id++){

      // }
     
     
    });

   
  }

}
