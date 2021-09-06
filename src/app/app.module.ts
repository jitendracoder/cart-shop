import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/share/header/header.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
// import { FillterComponent } from './components/shopping-cart/fillter/fillter.component';
// import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
// import { CartsComponent } from './components/shopping-cart/carts/carts.component';
// import { ItemsComponent } from './components/shopping-cart/product-list/items/items.component';
// import { CartItemsComponent } from './components/shopping-cart/carts/cart-items/cart-items.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ShoppingCartModule } from './components/shopping-cart/shopping-cart.module';
import{AuthModule} from './components/auth/auth.module';
import { AuthInterceptor } from './components/auth/auth.interceptor';
//import{RegisterComponent} from './components/auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    // ShoppingCartComponent,
    // FillterComponent,
    // ProductListComponent,
    // CartsComponent,
    // ItemsComponent,
    // CartItemsComponent
    //RegisterComponent
  ],
  imports: [

    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    ShoppingCartModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log("app module load");
  }
}
