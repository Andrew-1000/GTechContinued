import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Workorder } from '../../model/workorder';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-workorder-dialog',
  templateUrl: './workorder-dialog.component.html',
  styleUrls: ['./workorder-dialog.component.css']
})
export class WorkorderDialogComponent {

  action:string;
  workorder_data:any;

  constructor(
    public dialogRef: MatDialogRef<WorkorderDialogComponent>,
    //@Optional() is used to prevent error if no data is passed

    @Optional() @Inject(MAT_DIALOG_DATA) public data: Workorder) {
    console.log(data);
    this.workorder_data = {...data};
    this.action = this.workorder_data.action;
  }
  workOrderForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    employeeId: new FormControl('', Validators.required),
    emailadd: new FormControl('', [Validators.required, Validators.email]
  )
  });

  doAction() {
    this.dialogRef.close({event:this.action, data:this.workorder_data});
  }

}
