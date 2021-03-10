import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/share/header/header.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FillterComponent } from './components/shopping-cart/fillter/fillter.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartsComponent } from './components/shopping-cart/carts/carts.component';
import { ItemsComponent } from './components/shopping-cart/product-list/items/items.component';
import { CartItemsComponent } from './components/shopping-cart/carts/cart-items/cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    FillterComponent,
    ProductListComponent,
    CartsComponent,
    ItemsComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
