import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegionComponent } from 'src/app/region/region.component';
import { Employee } from 'src/app/model/employee';
import { Region } from 'src/app/model/region';

@Component({
  selector: 'app-region-dialog',
  templateUrl: './region-dialog.component.html',
  styleUrls: ['./region-dialog.component.css']
})
export class RegionDialogComponent implements OnInit {
  action:string;
  region_data:any;

  constructor(
    public dialogRef: MatDialogRef<RegionComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:Region
  ) {
    this.region_data = {...data};
    this.action = this.region_data.action;
  }


  doAction(){
    this.dialogRef.close({event:this.action,data:this.region_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {
  }

}
