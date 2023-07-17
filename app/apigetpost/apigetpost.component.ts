import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-apigetpost',
  templateUrl: './apigetpost.component.html',
  styleUrls: ['./apigetpost.component.scss'],
})
export class ApigetpostComponent implements OnInit {
  f: any;

  fact: string = '';
  length: number = 0;
  count: number = 0;
  list: any = [];
  r: any;
  // r:FormGroup;

  submit: boolean = false;
  constructor(private service: TestService, fb: FormBuilder,private route:Router) {
    this.f = fb.group({
      employeeName: [''],
      mobile: [''],
      userName: [''],
      password: [''],
      confirmPassword: [''],
    });
    this.r = fb.group({
      category: [''],
      description: [''],
    });

  }

  ngOnInit() {
    //    this.service.GetCatFacts().subscribe((resp:any)=>{
    //    console.log(resp)
    //     this.length = resp.length
    //    this.fact = resp.fact
    //  })
    // this.service.GetOrgEntries().subscribe((data:any)=>{
    // this.count = data.count
    //  this.list = data.entries })
  }

  Submit() {
    this.submit = true;
    console.log(this.r.controls['category'].value);
    console.log(this.r.controls['description'].value);
    let input = {
      categoryId: 0,
      category: this.r.controls['category'].value,
      description: this.r.controls['description'].value,
      createdBy: 1,
    };

    this.service.InsertCategory(input).subscribe((resp: any) => {
      console.log(resp);
    });
  }

  submit1() {
    console.log(this.f.controls['mobile'].value);
    console.log(this.f.controls['userName'].value);
    console.log(this.f.controls['password'].value);
    console.log(this.f.controls['confirmPassword'].value);

    let inputs = {
      employeeId: 0,
      employeeName: this.f.controls['employeeName'].value,
      mobile: this.f.controls['mobile'].value,
      userName: this.f.controls['userName'].value,
      password: this.f.controls['password'].value,
      confirmPassword: this.f.controls['confirmPassword'].value,
      createdBy: 1,
    };
    this.service.InsertEmployee(inputs).subscribe((res: any) => {
      alert(JSON.stringify(res));
      if (res.success == true) {
        this.route.navigateByUrl("/test");
      }
    });
  }

}
