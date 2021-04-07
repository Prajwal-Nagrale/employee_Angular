import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
import {EmployeeService} from '../employee.service'
import {AddEmployeeService} from '../add-employee.service'
import {MessageService} from '../message.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  constructor(private addEmp:AddEmployeeService,private addEmp1:EmployeeService,private msg:MessageService) { }
  employee?:Employee={id:'', name:'' , salary:null};

  submit(emp:Employee):void{
    this.addEmp.addEmployee(emp).subscribe((data)=>
    {
      console.log(data);
      this.msg.messages=[];
      this.msg.addMessage(data.message+" : "+emp.name)
    })
  }

  

  ngOnInit(): void {
  }

}
