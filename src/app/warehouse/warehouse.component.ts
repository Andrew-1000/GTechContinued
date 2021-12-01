import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { DialogBoxComponent } from "../dialog-box/warehouse-dialog/dialog-box.component";

import { Warehouse } from '../model/warehouse'

const WAREHOUSE_DATA: Warehouse[] = [
  { position: 1, name: "Head Office", region: "Nairobi" },
  { position: 2, name: "Umoja 2", region: "Nairobi" },
  { position: 3, name: "Athi River", region: "Nairobi" },
  { position: 4, name: "Kisumu", region: "Kisumu" },
  { position: 5, name: "Machakos", region: "Machakos" },
  { position: 6, name: "Mombasa", region: "Mombasa" },
  { position: 7, name: "Nakuru", region: "Nakuru" },
  { position: 8, name: "Malindi", region: "Malindi" },
  { position: 9, name: "Naivasha", region: "Naivasha" },
  { position: 10, name: "Bahati", region: "Nakuru" },
];

@Component({
  selector: "app-warehouse",
  templateUrl: "./warehouse.component.html",
  styleUrls: ["./warehouse.component.css"],
})
export class WarehouseComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild(MatSort, { static: true }) sort: MatSort | any;
  //Chemistry Metals with Filtering
  displayColumns: string[] = ["position", "name", "region", "action"];
  dataSource = new MatTableDataSource(WAREHOUSE_DATA);

  warehouse = [];
  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // this._warehouseService.getWarehouse()
    // //To receive data, we have to subscribe to it
    // .subscribe(
    //   data => this.warehouse = data
    // );
  }

  applyFilteration(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    openDialog(action: any, obj: { }) {
      obj = action;
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        width: "500px",
        data: obj
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == "Add") {
        this.addRowData(result.data);
      } else if (result.event == "Update") {
        this.updateRowData(result.data);
      } else if (result.event == "Delete") {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: undefined) {
    // var date = new Date();
    // this.dataSource.push({
    //   name:row_obj.name,
    //   region:row_obj.region
    // });
    // this.table.renderRows()
  }

  updateRowData(row_obj: undefined) {

  }

  deleteRowData(row_obj: undefined) {

  }
}
