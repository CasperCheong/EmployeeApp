import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Employee,
  IDepartment,
  IDesignation,
  IEmployeeList,
} from '../model/employee';
import { Observable } from 'rxjs';
import { EmployeeList } from '../pages/employee-list/employee-list';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl: string = 'https://api.freeprojectapi.com/api/EmployeeApp/';
  constructor(private http: HttpClient) {}

  getAllEmployee(): Observable<IEmployeeList[]> {
    return this.http.get<IEmployeeList[]>(this.apiUrl + 'GetEmployees');
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}${id}`);
  }

  createNewEmployee(obj: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl + 'CreateEmployee', obj);
  }

  updateEmployee(obj: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.apiUrl}UpdateEmployee?id=${obj.employeeId}`,
      obj
    );
  }

  getAllDepartment(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`${this.apiUrl}GetDepartments`);
  }

  deleteEmployeeById(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiUrl}DeleteEmployee?id=${id}`);
  }

  getDesignationByDeptId(deptId: number): Observable<IDesignation[]> {
    return this.http.get<IDesignation[]>(
      `${this.apiUrl}GetDesignationsByDeptId?deptId=${deptId}`
    );
  }
}
