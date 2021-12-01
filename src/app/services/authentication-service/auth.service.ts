import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registrationUrl = 'http://gtechwms.herokuapp.com/accounts/';

  // private _loginUrl = "https://gtechwms.herokuapp.com/accounts/login"
  private _loginUrl = "#"

  constructor(private httpClient: HttpClient) { }

  registerUser(userData: any){
    return this.httpClient.post<any>(this._registrationUrl, userData)
  }

  loginUser(userLoginData: any) {
    return this.httpClient.post<any>(this._loginUrl, userLoginData)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

}
