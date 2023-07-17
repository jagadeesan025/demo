import { Component, OnInit } from '@angular/core';
// import { METHODS } from 'http';
// import { stringify } from 'querystring';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

 x :any


//   j = 10;

//   d: any;
//   i: any;
//   num = 3;
//   car:boolean=true;
// c = "dhjsdf AAAA"
//   x = new Date();

//   amt = 100.00
//   json = {'name':'xxx','age':20};

//   test:boolean = false;
//   constructor() { }

















  ngOnInit(): void {}
    // for (this.i = 1; this.i <= 10; this.i++) {
//     this.d = this.num * this.i;
//     this.Submit(); // calling a function
//   }
// }


num1:any=10;
num2:any=""
c:any

as(a:any){
  this.c=this.num1+this.num2+a[1]
  console.log(this.c);

 }


// for(this.c;this.c<=15;this.c++)
// {
//   console.log(this.c);






// Submit()
// {
//   this.test = true;
//   alert(this.i)
//  this.num =  this.Add(10,20,30,40,40);



//   }


// Add(...nums:number[]) //positional parameters //default parameters //optionl parameter // rest parameters
// {
// return nums[0]; //returns a number value
// }


// functions
// function (){
//   this.c=this.num1+this.num2
//   console.log(this.c);


//  }



// ss(a:any)
// {
// console.log(a)
// }
}

