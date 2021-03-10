import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from 'src/app/components/services/productservice.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private _servicePr:ProductserviceService) { }

products_all:any;
  ngOnInit() {

  this.products_all = this._servicePr.product
   console.log(this._servicePr.product);
   //console.log(this.products_all.product);
  }

}
