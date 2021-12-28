import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';

import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification-service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  
  hide = true;
  fieldTextType: boolean | undefined;
  isLoading = false;
  progress =48

  constructor(
    private httpClient: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public toastr: ToastrService,
    public _notificationService: NotificationService
    
    ) { 
      this.afAuth.authState.subscribe(employee => {
        if (employee) {
          this.userData = employee;
          localStorage.setItem('employee', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('employee') || '{}');
        } else {
          localStorage.setItem('employee','null');
          JSON.parse(localStorage.getItem('employee') || '{}');
        }
      })
    }

    //Signing in With Username and Password - Firebase
    async SignIn(email: any, password : any) {
      
      try {
        this.loading();
        const result = await this.afAuth.signInWithEmailAndPassword(email, password);
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
          this.showToastr()
        });
        this.SetUserData(result);
      } catch (error) {
        this.showError()
        window.alert(error);
        
      }
  }

  async Signup(userEmail: any, password: any) {
    
    try {
      this.loading()
      const result = await this.afAuth.createUserWithEmailAndPassword(userEmail, password);
      // this.SendVerificationMail();
      this.SetUserData(result);
      this.router.navigate(['dashboard']);
      return this._notificationService.showToastr('New employee registered successfully, Success')
      
    } catch (error) {
      window.alert(error);
      return this._notificationService.showError('Oops an error occured')
    }
  }


  loading() {
    this.isLoading = true;
    //Faking an api call
    setTimeout(()=>{
      this.isLoading = false;
    }, 300)
  }


  showToastr() {
    this.toastr.success('Logged in successfully', 'Success');
  }
  showError() {
    this.toastr.error('Please check your credentials and try again', 'Oops!')
  }
  // async SendVerificationMail() {
  //   this.afAuth.auth.sendEmailVerification();
  //   this.router.navigate(['verify-email-address']);
  // }

  //reset forgot password
  async ForgotPassword(passwordResetEmail: any) {
  try {
    await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
    window.alert('Password reset sent to email, check your inbox.');
  } catch (error) {
    window.alert(error);
  }

}

//Returns true when user is logged in and email is verified

get isLoggedIn(): boolean {
  const employee = JSON.parse(localStorage.getItem('user') || '{}')
  return (employee !== null && employee.emailVerified !== false) ? true: false;

}
//Logging in with Google
// GoogleAuth() {
//   return this.AuthLogin(new auth.GoogleAuthProvider());
// }
//   async AuthLogin(provider: auth.GoogleAuthProvider) {
//     try {
//       const result = await this.afAuth.signInWithPopup(provider);
//       this.ngZone.run(() => {
//         this.router.navigateByUrl('/dashboard');
//       });
//       this.SetUserData(result);
//     } catch (error) {
//       window.alert(error);
//     }
//   }

//Setting up data when signing in specicifically with username and password, sign up with user and password and sign in with social auth provider in firestore database using 
// AngularFirestore + AngularFireStoreDocuemtn service
  SetUserData(employee: any) {
    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(`employee/${employee.employeeId}`);
    const userData: Employee = {
      employeeId: employee.employeeId,
      employeeEmail: employee.employeeEmail,
      employeeName: employee.employeeName,
      emailVerified: employee.emailVerified
    }
    return userData;
  }

  //Sign Out
  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('employee');
    this.router.navigate(['login']);
  }

    //Creating Account and Logging in Using HerokuApp API
    // private _registrationUrl = 'http://gtechwms.herokuapp.com/accounts/';
    private _registrationUrl = '#';

    // private _loginUrl = "https://gtechwms.herokuapp.com/accounts/login"
    private _loginUrl = "#"
  
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
