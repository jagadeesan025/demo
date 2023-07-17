import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-custmer',
  templateUrl: './custmer.component.html',
  styleUrls: ['./custmer.component.scss']
})
export class CustmerComponent implements OnInit {
  i:any
  mg:any

  constructor() { }

  ngOnInit(): void {

  }

}
var i=[1,2,4,56]
var mg=i.map(Math.pow)
console.log(mg);

