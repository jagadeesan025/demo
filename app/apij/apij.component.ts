import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apij',
  templateUrl: './apij.component.html',
  styleUrls: ['./apij.component.scss']
})
 export class ApijComponent implements OnInit {
f:any
list:any
submit: boolean = false;
constructor(private service: TestService , fb:FormBuilder,private rout:Router) {
  this.f=fb.group({
categoryId:[''],
category:[''],
description: [''],
deletedOn: [''],
removedRemarks: [''],
createdBy: [''],

  })
 }

  ngOnInit(): void {}

submit2(){
 this.submit = true;
 console.log(this.f.controls['category'].value);
 console.log(this.f.controls['description'].value);
 console.log(this.f.controls['deletedOn'].value);
 console.log(this.f.controls['removedRemarks'].value);

 let  input1 ={
  categoryId:0,
  category:this.f.controls['category'].value,
  description :this.f.controls['description'].value,
  deletedOn:this.f.controls['deletedOn'].value,
  removedRemarks :this.f.controls['removedRemarks'].value,
  createdBy:1,


 };
 this.service.  Insertcat(input1).subscribe((resl:any)=>
 {
  alert(JSON.stringify(resl));
  if(resl.success== true){
    this.rout.navigateByUrl("/catg")

  }
 })


}


}
