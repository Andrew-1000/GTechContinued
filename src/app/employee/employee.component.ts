import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Subject } from "rxjs";
import { EmployeeService } from "../services/employee-service/employee.service";
import { Employee } from "../model/employee";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { EmployeeDialogComponent } from '../dialog-box/employee-dialog/employee-dialog.component';
import { MaterialModule } from '../material/material.module'


export interface UserData {
  id: string;
  employeeName: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  "Lenny",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "purple",
  "fuchsia",
  "lime",
  "teal",
  "aqua",
  "blue",
  "navy",
  "black",
  "gray",
];
const NAMES: string[] = [
  "Maia",
  "Asher",
  "Olivia",
  "Atticus",
  "Amelia",
  "Jack",
  "Charlotte",
  "Theodore",
  "Isla",
  "Oliver",
  "Isabella",
  "Jasper",
  "Cora",
  "Levi",
  "Violet",
  "Arthur",
  "Mia",
  "Thomas",
  "Elizabeth",
];

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
// export class EmployeeComponent implements OnInit {

//   ELEMENT_DATA: Employee[];
//   displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeEmail','employeeRole','employeeRegion','accountStatus','action'];
//   dataSource = new MatTableDataSource<Employee>(this.ELEMENT_DATA);

//   // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
//   // @ViewChild(MatSort, {static: true}) sort: MatSort;

//   constructor(private _employeeService : EmployeeService) { }

//   ngOnInit(){
// this.dataSource.paginator = this.paginator;
// this.dataSource.sort = this.sort;
//   }

//   public getEmployeeList(){
//     let response = this._employeeService.employeeList();
//     response.subscribe(employeeList => this.dataSource.data = employeeList as Employee[])
//   }

// applyFilter(filterValue: string) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSource.filter = filterValue.trim().toLowerCase();

//   if (this.dataSource.paginator) {
//     this.dataSource.paginator.firstPage();
//   }
// }

// }
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    "employeeId",
    "employeeName",
    "employeeEmail",
    "employeeRole",
    "employeeRegion",
    "accountStatus",
    "action",
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(action: any, obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: "500px",
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == "Add") {
        this.addRowData();
      } else if (result.event == "Update") {
        this.updateRowData();
      } else if (result.event == "Delete") {
        this.deleteRowData();
      }
    });
  }

  addRowData() {}

  updateRowData() {}

  deleteRowData() {}
}

function createNewUser(id: number): UserData {
  const employeeName =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    "";

  return {
    id: id.toString(),
    employeeName: employeeName,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
  };
}
