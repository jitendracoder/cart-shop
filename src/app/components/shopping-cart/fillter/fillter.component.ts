import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrls: ['./fillter.component.css']
})
export class FillterComponent implements OnInit {

  fromvalue:any;
  constructor() { }

  ngOnInit() {
    console.log(this.fromvalue)
  }

}
