import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../services/authentication-service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  hide = false;
  fieldTextType: boolean | undefined;
  isLoading = false;
  progress = 48

  constructor(
    public _authService: AuthService,
    private _router: Router,
    private toastr: ToastrService
    ) {}

  ngOnInit() {}


  form = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
  ]),

    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
  });



  // loginUser() {

  //   this.loading()
  //   console.log(this.form.value)
  //   this._authService.loginUser(this.form.value)
  //   .subscribe(
  //     res => {
  //       console.log('success')
  //       localStorage.setItem('token',res.access)
  //       this._router.navigate(['/dashboard'])
  //       this.showToastr()
  //     },
  //     err =>{
  //       console.log('error')
  //       return this.showError()
  //     }
  //   )
  // }

  loading() {
    this.isLoading = true;
    //Faking an api call
    setTimeout(()=>{
      this.isLoading = false;
    }, 300)
  }

  showToastr() {
    this.loading()
    this.toastr.success('Logged in successfully', 'Success');
  }

  showError() {
    this.toastr.error('Please check your credentials and try again')
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
