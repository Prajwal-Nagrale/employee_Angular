import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {RouterModule,Routes} from '@angular/router'
import {EmployeeDetailsComponent} from './employee-details/employee-details.component'
import {UpdateEmployeeComponent} from './update-employee/update-employee.component'

const routes: Routes=[
  {path:'employeeList',component:EmployeesComponent},
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'employeeDetails/:id',component:EmployeeDetailsComponent},
  {path:'updateList/:id',component:UpdateEmployeeComponent},
  {path:'' ,redirectTo:'/employeeList', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
