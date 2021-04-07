import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee?: Employee = { id: '', name: '', salary: null };
  
  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private route:ActivatedRoute
  ) {}

  updateEmp(emp: Employee): void {
    this.employee = emp;
    this.employeeService
      .updateById(this.employee)
      .subscribe((data) => {
        console.log(data);
        this.messageService.messages=[];
        this.messageService.addMessage(data.message);
      });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employee.id=id;
  }
}