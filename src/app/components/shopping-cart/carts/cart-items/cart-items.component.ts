import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/components/services/message.service';
import {CartserviceService} from 'src/app/components/services/cartservice.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private _Msg:MessageService,private _cartService:CartserviceService) { }

  cart_arry:any =[];
  arry_value_store:any;
  qty:number;
  checkitem= true;
  itempresent:any;
  productExistInCart:any;
  getCartItem:any =[];
  // _cartService:any=[]
  ngOnInit() {

    // this._cartService.cartItems(this.arry_value_store).subscribe(res=>{
    //   console.log(res);
    //   return res;
    // })
      this._Msg._subject.subscribe(res=>{
      this.arry_value_store = res;
     
      this.productExistInCart = this.cart_arry.find(({id}) => id === this.arry_value_store.id);
      console.log(this.productExistInCart);
      if(!this.productExistInCart){
        this.qty=1;
        this.arry_value_store.qty= this.qty;
        this.cart_arry.push(this.arry_value_store);
        
        this._cartService.cartItems(this.arry_value_store).subscribe(res=>{
          // console.log(res);
          this.loadCartItem();
          // return res;
           
        })
        return;
      }
       else{
    
       this.productExistInCart.qty += 1;
       this._cartService.cartItems(this.productExistInCart).subscribe(res=>{
       // console.log(res);
         return res;
      })
      // console.log(this.productExistInCart);
 
      }
  });

//console.log(this.getCartItem);
this.loadCartItem();

}

loadCartItem(){
 //console.log("load call")
  this._cartService.cartItemsGet().subscribe(res=>{
    this.getCartItem = res;
    this.getCartItem;
    //console.log(this.getCartItem);
  })
}


}
