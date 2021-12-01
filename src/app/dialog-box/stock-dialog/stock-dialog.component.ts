import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Stock } from 'src/app/model/stock';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-dialog',
  templateUrl: './stock-dialog.component.html',
  styleUrls: ['./stock-dialog.component.css']
})
export class StockDialogComponent {

  action: string;
  stock_data: any;

  constructor(
    public dialogRef: MatDialogRef<StockDialogComponent>,
    private toastr: ToastrService,

    @Optional() @Inject(MAT_DIALOG_DATA)
    public data: Stock
  ) {
    console.log(data);
    this.stock_data = { ...data };
    this.action = this.stock_data.action;
  }
  position: number
  itemCode: string;
  quantity: number;
  warehouseId: number;
  warehouseName: string;
  stockForm: FormGroup = new FormGroup({
    warehouseName: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    itemCode: new FormControl('', Validators.required),
    warehouseId: new FormControl('', Validators.required)
  });


  ngOnInit(): void {
  }
  doAction() {
    this.dialogRef.close({ event: this.action, data: this.stock_data });
  }

}
