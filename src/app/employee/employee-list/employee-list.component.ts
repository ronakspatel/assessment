import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../employee.model';
import { EmployeeService } from '../employee.service';
/**
 * @author ronak
 * @class EmployeeListComponent implement OnInit interface
 */
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  public employees:EmployeeModel[];

  constructor(private employeeService:EmployeeService) { 
    this.employees=[];
  }

  ngOnInit() {
    this.getEmployees();
  }
  //craete method  getEmployees  to call employeeservice and store data in employees array
  getEmployees():void{
    this.employeeService.getEmployees().subscribe(employees=>this.employees=employees);
  }
  //create method for datele employee using id param
  deleteEmployee(id:number):void{
    this.employeeService.deleteEmployee(id).subscribe();
    this.getEmployees();
    alert('Employee delete successful')
  }

}
