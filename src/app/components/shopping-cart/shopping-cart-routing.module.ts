import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from 'src/app/components/shopping-cart/product-list/product-list.component';
import {ItemsComponent} from './product-list/items/items.component';
import {CartsComponent} from './carts/carts.component';
import {CartItemsComponent} from './carts/cart-items/cart-items.component';
import { FillterComponent } from './fillter/fillter.component';
import {ShoppingCartComponent} from './shopping-cart.component';
import {AuthGuard} from '../auth/auth.guard';



const routes: Routes = [
  {path:'shoppcart', component:ShoppingCartComponent, canActivate:[AuthGuard]},
  {path:'carts', component:CartsComponent},
  {path:'cartitems', component:CartItemsComponent},
  {path:'productlist', component:ProductListComponent},
  {path:'items', component:ItemsComponent},
  {path:'filter', component:FillterComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
