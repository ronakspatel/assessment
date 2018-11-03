import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
//craete routes type routes array and store some data to lazyloading module
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'',
    loadChildren:'./employee/employee.module#EmployeeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
