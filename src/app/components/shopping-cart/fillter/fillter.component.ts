import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrls: ['./fillter.component.css']
})
export class FillterComponent implements OnInit {

formData:any;
minValue:number;
maxValue:number;
minValueSubject = new Subject();
maxValueSubject= new Subject();

  constructor(private _form:FormBuilder) {

this.formData = this._form.group({
  min_price:[''],
  max_price:['']
  
})
   }

  ngOnInit() {
    
  }
  minPrice(event){
    console.log(this.formData.value.min_price)
    console.log(event.target.value)
    this.minValue =event.target.value;
  }
  maxPrice(event){
    console.log(event.target.value)
    this.maxValue =event.target.value;
  }

}
