import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  })  

  constructor() { }

  ngOnInit() {
  }
  get email() {
    return this.form.get('email')
  }
  onSubmit() {
    alert (JSON.stringify(this.form.value));
  }

}
