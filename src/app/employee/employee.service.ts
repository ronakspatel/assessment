import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeModel } from '../employee.model';


@Injectable()
export class EmployeeService {
  
  private employeeUrl = 'api/employees';
  
  constructor(private http: HttpClient) {
    
    
  }
  
  
  /**
   * @method getEmployees  craete method to get data in in-memory-web-api 
   * @method addEmployee  create method to add data in in-memory-web-api
   * @method deleteEmployee create method to delete data in in-memory-web-api
   */
  getEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.employeeUrl)
  }

  addEmployee(employee:EmployeeModel):Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(this.employeeUrl,employee)
  }

  deleteEmployee(id:number):Observable<EmployeeModel>{
    return this.http.delete<EmployeeModel>(this.employeeUrl+"/"+id)
  }
}
