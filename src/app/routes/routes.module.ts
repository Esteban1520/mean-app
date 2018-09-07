import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ReportsComponent } from '../reports/reports.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutesModule { }
