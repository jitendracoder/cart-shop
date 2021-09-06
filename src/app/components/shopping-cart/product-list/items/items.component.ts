import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from 'src/app/components/services/productservice.service';
import {MessageService} from 'src/app/components/services/message.service';
import {WishlistService} from 'src/app/components/services/wishlist.service';
import { ElementAst } from '@angular/compiler';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

constructor(
  private _servicePr:ProductserviceService,
  private _Msg:MessageService,
  private _wishlist:WishlistService) { }

products_all:any;
item_count:number;
qunty:number;
addAyyary:any=[];
//wishlistAdd:boolean = false;
  ngOnInit() {
      this._servicePr._getProductList().subscribe(res=>{
      this.products_all = res;
      this.products_all.forEach((productseach)=>{productseach.wishlistAdd = false}
        
      )


    })
    this.getAddedWishlis()
  }
  addcart(items){
      this._Msg.getproduct(items);
      if(this.qunty = 1){
        return this.qunty = this.qunty
       }
       else{
         return this.qunty += this.qunty;
       }
     
  }

  addToWishList(items){

  //  if(!items.wishlist){
     // console.log(!items.wishlist)
     // console.log("run if")
      items.wishlistAdd= true;
  //  }

   
    this._wishlist.addToWishList({id:items.id}).subscribe(res=>{

      return res;
      
    })

}
removeToWishList(items){
 // console.log(items.wishlist)
 // if(!items.wishlist){
    
    //console.log("run run remove")
    items.wishlistAdd= false;
//  }
 this._wishlist.deleteToWishList({id:items.id}).subscribe(res=>{
  items.wishlist = false;
   return res;
 })
 
}

getAddedWishlis(){
  console.log("called addedd wishlist")
  this._wishlist.getAddedWishLists().subscribe(res=>{
    //console.log(res)
    res.forEach((element) => {
    //  console.log(element);
     this.products_all.find((findinmain)=> { findinmain.id === element.id
     // console.log(findinmain)
       return findinmain.id === element.id
      
       //return  findinmain;
       
      }).wishlistAdd = true;

    });
    return res;
  })
}


}
