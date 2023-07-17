import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';


@Component({
  selector: 'app-apicomp',
  templateUrl: './apicomp.component.html',
  styleUrls: ['./apicomp.component.scss']
})
export class ApicompComponent implements OnInit {
  list:any;
  //   country:string = "";
  //   places: any;
  //   all:any
  //   abreviation:any

      constructor(private service:
   TestService) { }
  employeeId:any;
  employeeName:any;
  mobile:any;
  userName:any;
  Password:any;
  confirmPassword:any;
  createdBy:any;

  ngOnInit(): void {
  // this.service.GetOrgEntries().subscribe((data:any)=>{
  // this.country = data.country;
  //  this.places = data["post code"];

  // this.abreviation = data["country abbreviation"];


  //  console.log(this.list)
  // },error => {
  //    alert(error.message);
  //  })
  this.service.GetEmployee().subscribe((data: any) => {
   this.employeeId=data.employeeList[0]
   this.employeeName =data.employeeList.employeeName
   this.mobile=data.employeeList[2]
   this.userName=data.employeeList[3]
   this.Password=data.employeeList[4]
   this.confirmPassword=data.employeeList[5]

  console.log(this.list)
  this.list=data.employeeList

    })


  }
   }




