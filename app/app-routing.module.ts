import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIComponent } from './api/api.component';
import { ApicompComponent } from './apicomp/apicomp.component';
import { ApigetpostComponent } from './apigetpost/apigetpost.component';
import { ApijComponent } from './apij/apij.component';
import { ApijgetComponent } from './apijget/apijget.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CustmerComponent } from './custmer/custmer.component';
import { DesComponent } from './des/des.component';
import { H1Component } from './h1/h1.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemComponent } from './tem/tem.component';

const routes: Routes = [
{
    path:'demo',component:H1Component},
    {
    path:'ppe',component:PipeComponent
},
{path:'calculator',component:CalculatorComponent},
{path:'',component:DesComponent},
{path:'tem',component:TemComponent},
{path:'reactive',component:ReactiveComponent},
{path:'api',component:APIComponent},
{path:'test',component:ApicompComponent},
{path:'apiget',component:ApigetpostComponent},
{path:'cat',component:ApijComponent},
{path:'catg',component:ApijgetComponent},
{path:'cu',component:CustmerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
