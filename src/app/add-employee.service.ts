import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(employee: Employee): Observable<any> {
    const URL = 'http://localhost:8081/employees/';
    const httpOptions= {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    const body = {
      empId: employee.id,
      empName: employee.name,
      empSalary: employee.salary,
    };

    return this.http.post(URL, body, httpOptions);
  }
}
