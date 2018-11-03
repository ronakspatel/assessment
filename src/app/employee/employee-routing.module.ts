import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
//craete routes type routes array and store some data to lazyloading module
const routes: Routes = [
  //appemployee component path 
  {
    path:'addemployee',
    component:AddEmployeeComponent
  },
  //employeelist component path
  {
    path:'employeelist',
    component:EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
