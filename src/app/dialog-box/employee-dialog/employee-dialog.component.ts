import { Component, OnInit, Optional, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Employee } from "../../model/employee";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../../services/authentication-service/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee-dialog",
  templateUrl: "./employee-dialog.component.html",
  styleUrls: ["./employee-dialog.component.css"],
})
export class EmployeeDialogComponent {
  action: string;
  employee_data: any;

  constructor(
    public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    private toastr: ToastrService,
    //@Optional() is used to prevent error if no data is passed

    @Optional() @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {
    console.log(data);
    this.employee_data = { ...data };
    this.action = this.employee_data.action;
  }

  registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    employeeId: new FormControl('', Validators.required),
    emailadd: new FormControl('', [Validators.required, Validators.email]
  )
  });

  showToastr() {
    this.toastr.success("New employee registered successfully", "Success");
  }

  showError() {
    this.toastr.error("An error occured", "Oops!");
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.employee_data });
  }
}
