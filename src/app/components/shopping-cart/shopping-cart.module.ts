import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import {ItemsComponent} from '../shopping-cart/product-list/items/items.component';
import {ProductListComponent} from '../shopping-cart/product-list/product-list.component';
import {CartsComponent} from '../shopping-cart/carts/carts.component';
import {CartItemsComponent} from '../shopping-cart/carts/cart-items/cart-items.component';
//import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';
import {ShoppingCartComponent} from './shopping-cart.component';
import{FillterComponent} from './fillter/fillter.component';
import{ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';


@NgModule({
  declarations: [FillterComponent,ItemsComponent,ProductListComponent,CartsComponent,CartItemsComponent,ShoppingCartComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShoppingCartRoutingModule
  ],
  bootstrap: [ShoppingCartComponent]
})
export class ShoppingCartModule { 
  constructor(){
    console.log("shoppng-cart module load");
  }
}
