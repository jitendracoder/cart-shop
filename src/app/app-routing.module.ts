import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartItemsComponent } from './components/shopping-cart/carts/cart-items/cart-items.component';
import { CartsComponent } from './components/shopping-cart/carts/carts.component';
import { FillterComponent } from './components/shopping-cart/fillter/fillter.component';
import { ItemsComponent } from './components/shopping-cart/product-list/items/items.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  // {path:'shoppingcart',component:ShoppingCartComponent},
  // {path:'carts', component:CartsComponent},
  // {path:'cartitems', component:CartItemsComponent},
  // {path:'productlist', component:ProductListComponent},
  // {path:'items', component:ItemsComponent},
  // {path:'filter', component:FillterComponent}
  // {
  //   path:'auth',
  //   loadChildren: () => import('./components/auth/auth.module').then(m=>m.AuthModule)
  // },
  // {
  //   path: 'shop',
  //   loadChildren: () => import ('./components/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
