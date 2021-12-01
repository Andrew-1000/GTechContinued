import { Component, OnInit, ViewChild } from '@angular/core';
import { Workorder } from '../model/workorder'
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WorkorderDialogComponent } from '../dialog-box/workorder-dialog/workorder-dialog.component';

const WORKORDER_DATA: Workorder[] = [
  { customerId: 2323, workorderNumber: 82232332324, dateCreated: new Date("February 5, 2020 "), employeeId: 2332, workOrderDate: new Date("February 4, 2020 "), signalTap: "12.4dB", signalAd: "1.2dB" },
  { customerId: 2345, workorderNumber: 34442434432, dateCreated: new Date("February 6, 2020 "), employeeId: 67, workOrderDate: new Date("February 5, 2020 "), signalTap: "7.4dB", signalAd: "2.0dB" },
  { customerId: 2355, workorderNumber: 45454545545, dateCreated: new Date("February 7, 2020 "), employeeId: 5334, workOrderDate: new Date("February 6, 2020 "), signalTap: "1.4dB", signalAd: "4.3dB" },
  { customerId: 2654, workorderNumber: 45453355545, dateCreated: new Date("February 8, 2020 "), employeeId: 545, workOrderDate: new Date("February 7, 2020 "), signalTap: "2.4dB", signalAd: "6.8dB" },
  { customerId: 5445, workorderNumber: 54545554545, dateCreated: new Date("February 9, 2020 "), employeeId: 565, workOrderDate: new Date("February 8, 2020 "), signalTap: "6.4dB", signalAd: "8.8dB" },
  { customerId: 5656, workorderNumber: 54545533543, dateCreated: new Date("February 10, 2020"), employeeId: 767, workOrderDate: new Date("February 9, 2020 "), signalTap: "10.4dB", signalAd: "12.7dB" },
  { customerId: 3244, workorderNumber: 56546655665, dateCreated: new Date("February 11, 2020"), employeeId: 8775, workOrderDate: new Date("February 10, 2020"), signalTap: "6.4dB", signalAd: "14.5dB" },
  { customerId: 5455, workorderNumber: 54664646464, dateCreated: new Date("February 12, 2020"), employeeId: 1001, workOrderDate: new Date("February 11, 2020 "), signalTap: "11.4dB", signalAd: "12.5dB" }];
@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.css']
})


export class WorkorderComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  displayColumns: string[] = ["customerId", "workorderNumber", "dateCreated", "workOrderDate","employeeId", "signalTap",  "signalAd", "action"];
  dataSource = new MatTableDataSource(WORKORDER_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilteration(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: any, obj: {}) {
    obj = action;
    const dialogRef = this.dialog.open(WorkorderDialogComponent, {
      width: "500px",
      data: obj
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event== "Add") {
        this.addWorkOrder(result.data);

      } else if(result.event == "Update") {
        this.updateWorkOrder(result.data);
      } else if(result.event=="Delete"){
        this.deleteWorkOrder(result.data);
      }
    })
  }
  addWorkOrder(_workorder_obj: undefined){

  }

  updateWorkOrder(_workorder_obj: undefined) {

  }
  deleteWorkOrder(_workorder_obj: undefined){

  }

}
