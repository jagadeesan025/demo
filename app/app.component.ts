import { Component } from '@angular/core';
import { FormGroup,FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NeService } from './Services/ne.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'free';
  TaskForm:FormGroup;
  list:any;
  submitted : boolean = false;
  cancal:boolean=false
  Category:any;
  ClientDtls:any;

  constructor(private fb:FormBuilder,private rout:Router,private service:NeService) {

    this.TaskForm = this.fb.group({
      Category : ['',Validators.required],
      description : ['',Validators.required],
      sd: ['',Validators.required],
      dd: ['',Validators.required],
      Client:[null,Validators.required]

    })
  }

    ngOnInit(): void{
      this.Getclient();
    }

    Getclient(){
      this.service.Getclient().subscribe((data:any)=>{
        if(data.success){
          this.ClientDtls=data.clientList;
        }
      })
    }
  }
