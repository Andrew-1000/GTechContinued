import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  isLoading = false;
  progress = 48
  hide = true;

  form = new FormGroup({
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ])
  });

  constructor(
    private toastr: ToastrService,
    private _router: Router
  ) {}

  get email() {
    return this.form.get("email");
  }

  ngOnInit() {}

  onSubmit() {
    this.showToastr();
    this.loading();
    this._router.navigate(['/dashboard'])
  }

  fieldTextType: boolean;

  confirmFieldTextType: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleConfirmFieldTextType() {
    this.confirmFieldTextType = !this.confirmFieldTextType;
  }

  showToastr() {
    this.toastr.success('Password changed successfully', 'Success');
  }

  loading() {
    this.isLoading = true;
    //Faking an api call
    setTimeout(()=>{
      // this.isLoading = false;
    }, 10000)
  }
}
