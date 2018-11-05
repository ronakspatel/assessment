import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { EmployeeModel } from '../../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public employee: EmployeeModel;
  public designation;

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) {
    this.designation = ["Chief Executive Officer",
      "Chief Operating Officer",
      "Chief Financial Officer",
      " Chief Technology Officer",
      " Chief Marketing Officer",
      " Chief Legal Officer"];
  }
  //create formGroup and formcontrol
  fromControl = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    designation: ['', Validators.required],
    joiningDate: ['', Validators.required]
  })

  ngOnInit() {
  }
  // create method using employee param to pass data to over employeeservice
  
  onSubmit(employee): void {
   employee.joiningDate=employee.joiningDate.formatted
  
   
   
    
    

   alert('employee add successfuly')
   
    this.employeeService.addEmployee(employee).subscribe(employee => this.employee = employee);
  }
  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    
    this.fromControl.patchValue({
      joiningDate: {
        // date: {
        //   year: date.getFullYear(),
        //   month: date.getMonth() + 1,
        //   day: date.getDate()
        // }
      }
    });
    
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.fromControl.patchValue({ joiningDate: null });
  }
}


