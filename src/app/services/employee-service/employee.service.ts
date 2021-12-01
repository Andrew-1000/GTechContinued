 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _employeeListUrl = "https://gtechwms.herokuapp.com/accounts?limit=25&offset=0";

  constructor(private _http:HttpClient) { }

  public employeeList(){
    return this._http.get(this._employeeListUrl)
  }

  
}
