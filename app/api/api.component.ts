import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class APIComponent implements OnInit {
  // count:number = 0;
  // list:any;
  // time:any;
  // disclaimer:any]
  list:any = [];
  results:any;

  constructor(private service:TestService) { }

  ngOnInit(): void {
    this.service.GetOrgEntries().subscribe((resp:any)=>{
alert(JSON.stringify(resp));
// this.count = resp.count;
// this.list = resp.entries;
// // alert(JSON.stringify(this.list))
// this.time =resp.time
// this.list =resp.time;
// alert(JSON.stringify(this.time))

// this.list=resp.results
//this.results=resp.name
//this.results=resp.gender
this.list=resp

 //alert(JSON.stringify(this.list))



    })
  }

}
