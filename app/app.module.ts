import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { H1Component } from './h1/h1.component';
import { PipeComponent } from './pipe/pipe.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DesComponent } from './des/des.component';
import { TemComponent } from './tem/tem.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {HttpClientModule} from '@angular/common/http';
import { APIComponent } from './api/api.component';
import { ApicompComponent } from './apicomp/apicomp.component';
import { ApigetpostComponent } from './apigetpost/apigetpost.component';
import { ApijComponent } from './apij/apij.component';
import { ApijgetComponent } from './apijget/apijget.component';
import { CustmerComponent } from './custmer/custmer.component'

@NgModule({
  declarations: [
    AppComponent,
    H1Component,
    PipeComponent,
    CalculatorComponent,
    DesComponent,
    TemComponent,
    ReactiveComponent,
    APIComponent,
    ApicompComponent,
    ApigetpostComponent,
    ApijComponent,
    ApijgetComponent,
    CustmerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
