import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from 'src/app/components/services/productservice.service';
import {MessageService} from 'src/app/components/services/message.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

constructor(private _servicePr:ProductserviceService, private _Msg:MessageService) { }
products_all:any;
item_count:number;
qunty:number;
  ngOnInit() {
      this.products_all = this._servicePr.product
  }
  

  addcart(items){
       //this.item_count=
       this._Msg.getproduct(items);

       if(this.qunty = 1){
        return this.qunty = this.qunty
       }
       else{
         return this.qunty += this.qunty;

        
       }
       console.log(this.qunty);
  }

}
