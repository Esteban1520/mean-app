import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from './services/tasks.service';
import { EmployeeService } from './services/employee.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RoutesModule } from './routes/routes.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './employees/employees.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    EmployeesComponent,
    ReportsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RoutesModule,
  ],
  providers: [TasksService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
