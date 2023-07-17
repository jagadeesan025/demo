import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-apijget',
  templateUrl: './apijget.component.html',
  styleUrls: ['./apijget.component.scss']
})
export class ApijgetComponent implements OnInit {
  list:any;


  constructor( private service :TestService) { }

categoryId:any;
category:any;


description: any;
deletedOn:any;
removedRemarks:any;
createdBy:any;
  ngOnInit(): void {
    this.service.Getcat().subscribe((data:any)=>{
      this.list=data.categoryList
    })

  }

}
