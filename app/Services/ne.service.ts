import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NeService {

  constructor(private http:HttpClient) { }
  Getclient(){
    return this.http.get("http://catodotest.elevadosoftwares.com//Client/GetAllClientDetails")
  }
}
