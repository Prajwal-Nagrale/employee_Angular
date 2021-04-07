import {Employee} from './employee'

export interface EmpResponse{
    empId:string;
    empName:string;
    empSalary:number;
}

interface EmpbyId{
    empId:string;
    name:string;
    salary:number;
}

export interface Response2{
    message:EmpbyId[];
}

export interface Response{
    message:EmpResponse[];
}

