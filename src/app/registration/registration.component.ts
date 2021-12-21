import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/authentication-service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../services/notification-service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  get userEmail(){
    return this.registrationForm.get('userEmail');
  }

  constructor(private formBuilder: FormBuilder, public _authService: AuthService, private _notificationService:NotificationService,private _router: Router) { }

  registrationForm = this.formBuilder.group({
    // firstName: ['',Validators.required],
    // lastName: ['',Validators.required],
    // employeeId: ['',Validators.required],
    userEmail: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
});

  ngOnInit() {
  }

  registerEmployee(){
    console.log(this.registrationForm.value)
    this._authService.registerUser(this.registrationForm.value)
      .subscribe(
        res => {
          console.log('success')
          localStorage.setItem('token', res.access)
          this._router.navigate(['/dashboard'])
          return this._notificationService.showToastr('New employee registered successfully, Success')
      
        },
        err => {
          console.log('error')
          return this._notificationService.showError('An error occured, Oops!')

        }
      )
  }


}
