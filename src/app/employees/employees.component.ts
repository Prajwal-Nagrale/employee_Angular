import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {Employee} from '../employee'
import {EmployeeService} from '../employee.service'
import {Response} from '../Response'
import {EmployeeDetailsComponent} from '../employee-details/employee-details.component'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  name:string ="Prajwal";

  employee:Employee[]=[];
  routes:RouterLink;

selectedEmployee?:Employee;
onSelect( selEmp:Employee):void {
  console.log('execued this ',selEmp);
  this.selectedEmployee=selEmp;

}

getEmployees():void{
  console.log("Getting all employees");
  this.employeeService.getAllEmployess().subscribe((emp)=>{
    this.employee=emp.message.map((emp)=>({name:emp.empName, salary:emp.empSalary,id:emp.empId}))
  });
}
  constructor(private employeeService: EmployeeService ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

}
