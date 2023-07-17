import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  f:FormGroup;
  submit:boolean = false;

  constructor(private fb:FormBuilder) {
    this.f = this.fb.group({
      firstName :['',[Validators.required,Validators.email]]
    })
  }

  ngOnInit(): void {
  }
  Submit()
  {
    this.submit = true;
    console.log(this.f.controls['firstName'].value)
     this.f.controls['firstName'].setValue("")
  }

}
