import { Component, OnInit, ViewChild } from '@angular/core';
import { Region } from '../model/region'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RegionDialogComponent } from '../dialog-box/region-dialog/region-dialog.component';
import { RegionService } from '../../app/services/region-service/region.service';

const REGION_DATA: Region[] = [
  { position: 1, regionName: "Head Office"},
  { position: 2, regionName: "Umoja 2"},
  { position: 3, regionName: "Athi River"},
  { position: 4, regionName: "Kisumu"},
  { position: 5, regionName: "Machakos" },
  { position: 6, regionName: "Mombasa" },
  { position: 7, regionName: "Nakuru" },
  { position: 8, regionName: "Malindi" },
  { position: 9, regionName: "Naivasha"},
  { position: 10, regionName: "Bahati" },
];


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild(MatSort, { static: true }) sort: MatSort | any;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>  |any ;

  displayColumns: string[] = ["position", "regionName", "action"];
  dataSource = new MatTableDataSource(REGION_DATA);


  constructor(public dialog: MatDialog, private regionService: RegionService) {}

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  applyFilteration(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: any, obj: { }) {
    obj = action;
    const dialogRef = this.dialog.open(RegionDialogComponent, {
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

addRowData(_row_obj: any) {
  this.regionService.addRegion();

  // var d = new Date();
  // this.dataSource.post({
  //   id:d.getTime(),
  //   name: row_obj.name
  // });
  // this.table.renderRows();
}

updateRowData(_row_obj: any) {

}

deleteRowData(_row_obj: any) {

}

}
