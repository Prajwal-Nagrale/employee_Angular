import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Employee} from '../employee'
import {EmployeeService} from '../employee.service'
import {Location} from '@angular/common'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
@Input() employee?:Employee;



// onSelect( selEmp:Employee):void {
//    console.log('execued this ',selEmp);
//    this.employee=selEmp;
  
//  }

  constructor(private route:ActivatedRoute, private empService:EmployeeService, private location:Location) { }

  getEmployees():void{
    const id=this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(id).subscribe((emp)=>{
      console.log(emp)
      this.employee={
        id:emp.message[0].empId,
        name:emp.message[0].name,
        salary:emp.message[0].salary,
      }
    })
  }

  deleteEmployee():void{
    const id=this.route.snapshot.paramMap.get('id');
    this.empService.deleteById(id).subscribe((emp)=>
    {
      console.log("Deleted Employee Data of id : "+id);
    })
  }


  ngOnInit(): void {
    this.getEmployees();
    
  }

}
