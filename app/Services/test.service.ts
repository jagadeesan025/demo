import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  public GetOrgEntries()
  {
    // return this.http.get("https://api.publicapis.org/entries");
    // return this.http.get("https://catfact.ninja/fact")

    // return this.http.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    // return this.http.get("http://universities.hipolabs.com/search?country=United+States")
    // return this.http.get("https://randomuser.me/api/ ")
    return this.http.get("https://api.zippopotam.us/us/33162")
  }
  InsertCategory(input:any)
  {
    return this.http.post("http://catodotest.elevadosoftwares.com/category/insertcategory",input)
  }
  InsertEmployee(inputs:any){
    return this.http.post("http://catodotest.elevadosoftwares.com/Employee/InsertEmployee",inputs)
  }
  GetEmployee(){
    return this.http.get("http://catodotest.elevadosoftwares.com/Employee/GetAllEmployeeDetails")}

  Insertcat(input1:any){
    return this.http.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory",input1)
  }
     Getcat(){
      return this.http.get("http://catodotest.elevadosoftwares.com//Category/GetAllCategories")

     }
}



