export class Employee {
  employeeId: number;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfJoining: string;
  departmentId: number;
  designationId: number;
  employeeType: string;
  salary: number;

  constructor() {
    this.employeeId = 0;
    this.dateOfJoining = '';
    this.departmentId = 0;
    this.designationId = 0;
    this.email = '';
    this.employeeType = '';
    this.fullName = '';
    this.phone = '';
    this.gender = '';
    this.salary = 0;
  }
}

export interface IDepartment {
  departmentId: number;
  departmentName: string;
}

export interface IDesignation {
  designationId: number;
  departmentId: number;
  designationName: string;
}

export interface IEmployeeList {
  employeeId: number;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfJoining: string;
  departmentName: string;
  designationName: number;
  employeeType: string;
  salary: number;
}
