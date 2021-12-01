
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { from } from "rxjs";
import { WarehouseComponent } from './warehouse/warehouse.component';
import { DialogBoxComponent } from './dialog-box/warehouse-dialog/dialog-box.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { AuthService } from './services/authentication-service/auth.service';
import { AuthGuard } from './services/authentication-service/auth.guard';
import { MaterialModule } from './material/material.module';
import { EmployeeService } from './services/employee-service/employee.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { TokenInterceptorService } from './services/authentication-service/token-interceptor.service';
import { EmployeeDialogComponent } from './dialog-box/employee-dialog/employee-dialog.component';
import { WorkorderComponent } from './workorder/workorder.component';
import { WorkorderDialogComponent } from './dialog-box/workorder-dialog/workorder-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { RegionComponent } from './region/region.component';
import { NotificationService } from './services/notification-service/notification.service';
import { RegionDialogComponent } from './dialog-box/region-dialog/region-dialog.component';
import { StockComponent } from './stock/stock.component';
import { StockDialogComponent } from './dialog-box/stock-dialog/stock-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    HomeComponent,
    EmployeeComponent,
    NewPasswordComponent,
    ConfirmEqualValidatorDirective,
    WarehouseComponent,
    DialogBoxComponent,
    EmployeeDialogComponent,
    WorkorderComponent,
    WorkorderDialogComponent,
    RegionComponent,
    RegionDialogComponent,
    StockComponent,
    StockDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: false,
      progressAnimation: "increasing",
      preventDuplicates: true
    })

  ],
  entryComponents: [
    DialogBoxComponent, EmployeeDialogComponent, WorkorderDialogComponent
  ],
  providers: [ AuthService, AuthGuard, NotificationService, EmployeeService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
