import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.scss']
})
export class DesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //  var i = ["1","2","3","4","6"];
  //  var num=["nethiya","karthika","mani karnika","mohanasundhari","rasamal"]
  //  var inum=i.concat(num);
  // console.log(i[0]+   num[0]);
  // console.log(i[1]+   num[1]);
  // console.log(i[2]+   num[4]);
  // console.log(i[3]+   num[2]);
  // console.log(i[4]+   num[3]);
//  var j
//  var n
//    function lic (j:any,n:any){
//     return(j >=6);
//   }
//   var passed=["2","1","6","1","0","3"].every(lic)
//   console.log(""+passed);
 var j
 var n


  // function hi(J:any,m:any){
  //   return(J>=10);
  // }
  // var k=["10","12","5","3"].filter(hi)
  // console.log(""+k);
// let kat=[12,33,3,44];
// kat .forEach(function jk (value) {

// console.log(value);

// })
// var shd=["k.","saravana","kumar"]
//  var fm=shd.join("_");
//  console.log(""+fm);

// var intex=[1,1,2,46,64].indexOf(46)
//  console.log(intex)

// var lastio=[1,2,5,523,452,4646,464,522635] .lastIndexOf(464)
//     console.log(lastio);

// var leo=[1,3,4,5]
// var rt=leo.map(Math.sqrt);
// console.log(""+rt);

// var ga= [1, 4, 9,3];
// var ho=[2,4,42,213]

// var mi= ga.pop();
// console.log("" + mi );

// var mio= ho.pop();
// console.log(""+ mio);


// var  how=[1,23,34,67,23]
// var len=how.push(20);
// console.log(""+how)
// var hs= [425, 12, 23, 44].reduce(function(a, b){ return a * b; });
// console.log("number is " + hs);
// var car=[23,4,6,8,3,2,2].reverse();
// console.log("this is my creation"+car);
// var car=[23,4,6,8,3,2,2].shift();
// console.log("this is my creation"+car);
// var arr = ["red", "mer", "banana", "saft", "hard"];
// console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) );
// console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) );
// var car=[23,4,6,8,3,2,2];
//  var hh =car.sort();
// console.log("this is my creation"+hh);
// var car=[23,4,6,8,3,2,2]
// var rem=car.splice(0,4,3);
// console.log (""+car);
// console.log("this is my creation"+rem);
// var car=[23,4,6,8,"hai",2,2]
// console.log(car[3])

var i= [1, 2, 3, 4,5];

console.log(i[0]*i[0]);
console.log(i[1]*i[1]);
console.log(i[2]*i[2]);
console.log(i[3]*i[3]);
console.log(i[4]*i[4]);
// var gd=i.map(Math.sqrt);
// console.log(""+gd);
// sum of the positive number or show 0
function csk(element:any ) {
  return (element >= 0);
}

{var res = [1,-4,12,0,-3,29,-150].filter(csk);
console.log( res);
if(res=[]){
  console.log(0);}

  }
var input=[15,10,35,32,40,22]
console.log(input.sort());
console.log(input.reverse());
console.log(Math.max(...input));
console.log(Math.min(...input));
function  gra (element: number){
  return (element>=10);

}
var res1=input.filter(gra)
console.log(res1);

var in3=[12,46,32,64];
 var kik =(in3[0]+in3[1]+in3[3]+in3[3])
  console.log(kik);
  var res2=kik/4
  console.log(res2);
  // 2!
  let iu: number = 1;

  let icm:number
//  for(iu=1;iu<=3;iu++){


  // while (iu <=3) {
  //    icm= iu*1 ;
  //    iuc=iu*icm
  //    console.log(iuc);}
  // 2!
  let iuc:number
  function fac(iuc:any){
    let fact = 1;
for (let i = 1; i <= iuc; i++) {
        fact = fact * i;
    }
    console.log(fact);
}
fac(2);
3!
function fre(iuc:any){
  let fact = 1;
for (let i = 1; i <= iuc; i++) {
      fact = fact * i;
  }
  console.log(fact);
}
fac(3);



 }



}














