import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { EmployeeService } from '../employee/employee.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,AppRoutingModule,HttpClientModule
  ],
  declarations: [SidebarComponent,TopbarComponent,HomeComponent],
  exports:[SidebarComponent,TopbarComponent,AppRoutingModule],
  providers:[]
})
export class CoreModule { }
