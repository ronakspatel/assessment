import { Injectable } from '@angular/core';
import { EmployeeModel } from './employee.model';
import {InMemoryDbService} from 'angular-in-memory-web-api'
//create service and implements inmemoryDbService
@Injectable()
export class InMemoryWebApiService implements InMemoryDbService {
  //create method to store some data and return employees
  createDb() {
    //craete array type employeemodel
    const employees: EmployeeModel[] =[ 
      {id : 1, name: 'Rahul', age: 27,designation:'Chief Executive Officer',joiningDate:'2020-10-10'},
      {id : 2, name: 'Ronak', age: 22,designation:'Chief Executive Officer',joiningDate:'2018-09-12'}
  ]

    return { employees }
  }

}
