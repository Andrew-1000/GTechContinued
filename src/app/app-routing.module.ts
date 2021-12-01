import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { from } from "rxjs";
import { HomeComponent } from "./home/home.component";
import { EmployeeComponent } from "./employee/employee.component";
import { NewPasswordComponent } from "./new-password/new-password.component";
import { WarehouseComponent } from "./warehouse/warehouse.component";
import { AuthGuard } from "./services/authentication-service/auth.guard";
import { WorkorderComponent } from './workorder/workorder.component';
import { RegionComponent } from './region/region.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "new-password",
    component: NewPasswordComponent,
  },
  {
    path: "registration",
    component: RegistrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "employee",
    component: EmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "warehouse",
    component: WarehouseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "workorder",
    component: WorkorderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "region",
    component: RegionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "stock",
    component: StockComponent,
    canActivate: [AuthGuard],
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
