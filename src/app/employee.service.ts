import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Response, Response2} from './Response'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions={ headers:new HttpHeaders({'Content-Type':'application/json'})};

  //employee?:Employee;

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/employees';

  getAllEmployess():Observable<Response>{
    return this.http.get<Response>(this.url,this.httpOptions);
  }

  getEmployee(id):Observable<Response2>{
    const newUrl=`${this.url}/${id}`;
    return this.http.get<Response2>(newUrl,this.httpOptions);
  }

  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url,employee,this.httpOptions)
  }

  deleteById(id):Observable<Employee>{
    const newUrl=`${this.url}/${id}`;
    return this.http.delete<Employee>(newUrl,this.httpOptions);
  }

  updateById(employee:Employee):Observable<any>{
    const newUrl=`${this.url}/${employee.id}`;
    return this.http.put<Employee>(newUrl,employee,this.httpOptions);
  }
  

  // getAllEmployees():Employee[]{
  //   return [{
  //     id:1,
  //     name:"Prajwal",
  //     salary:25000
  //   },{
  //     id:2,
  //     name:"Ashok",
  //     salary:35000
  //   },
  //   {
  //     id:3,
  //     name:"Avin",
  //     salary:25000
  //   },
  //   {
  //     id:4,
  //     name:"Sumit",
  //     salary:35000
  //   }
  // ]
  // }
}
