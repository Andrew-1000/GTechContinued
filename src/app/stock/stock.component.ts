import { Component, OnInit, ViewChild } from '@angular/core';
import { Stock } from '../model/stock';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StockDialogComponent } from '../dialog-box/stock-dialog/stock-dialog.component';

const STOCK_DATA: Stock[] = [
  { position: 1, warehouseName: "Head", itemCode: " JS232", quantity: 3, warehouseId: 4 },
  { position: 2, warehouseName: "Umoja", itemCode: " TE232", quantity: 4, warehouseId: 1 },
  { position: 3, warehouseName: "Athi", itemCode: " ET232", quantity: 6, warehouseId: 2 },
  { position: 4, warehouseName: "Kisumu", itemCode: "JU233", quantity: 4, warehouseId: 1 },
  { position: 5, warehouseName: "Machakos", itemCode: "KI232", quantity: 9, warehouseId:1 },
  { position: 6, warehouseName: "Mombasa", itemCode: "LO541", quantity: 8, warehouseId: 3 },
  { position: 7, warehouseName: "Nakuru", itemCode: "PA21", quantity: 19, warehouseId: 4 },
  { position: 8, warehouseName: "Malindi", itemCode: "PQ23", quantity: 2, warehouseId: 4 },
  { position: 9, warehouseName: "Naivasha", itemCode: "PL12", quantity: 3, warehouseId: 2 },

];

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})


export class StockComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | any;
  @ViewChild(MatSort, { static: true}) sort: MatSort | any;

  displayColumns: string[] = ["position", "warehouseName", "itemCode", "quantity", "warehouseId", "action"];
  dataSource = new MatTableDataSource(STOCK_DATA);

  stock = [];

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
    const dialogRef = this.dialog.open(StockDialogComponent,{
      width: "500px",
      data: obj
    })
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == "Add") {
        this.addStock(result.data);

      } else if(result.event == "Update") {
        this.updateStock(result.data);
      } else if(result.event == "Delete") {
        this.deleteStock(result.data);
      }
    });

  }
  addStock(_stock_obj: any){

  }

  updateStock(_stock_obj: any){

  }

  deleteStock(_stock_obj: any) {

  }

}
