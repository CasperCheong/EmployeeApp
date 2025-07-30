import { Component, inject } from '@angular/core';
import { Employee, IDepartment, IDesignation } from '../../model/employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
  employeeObj: Employee = new Employee();

  employeeService = inject(EmployeeService);
  activatedRouter = inject(ActivatedRoute);
  deptList$: Observable<IDepartment[]> = new Observable<IDepartment[]>();
  designationList: IDesignation[] = [];
  editEmpId: number = 0;

  constructor() {
    this.deptList$ = this.employeeService.getAllDepartment();
    this.activatedRouter.params.subscribe((res: any) => {
      this.editEmpId = res.id;
      if (this.editEmpId != 0) {
        this.getEmployeeById();
      }
    });
  }

  getEmployeeById() {
    this.employeeService
      .getEmployeeById(this.editEmpId)
      .subscribe((res: any) => {
        this.employeeObj = res;

        this.getDesignation();
      });
  }

  // formatDateToYMD(dateString: string): string {
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = ('0' + (date.getMonth() + 1)).slice(-2);
  //   const day = ('0' + date.getDate()).slice(-2);
  //   return `${year}-${month}-${day}`;
  // }
  onSaveEmployee() {
    debugger;
    this.employeeService.createNewEmployee(this.employeeObj).subscribe({
      next: (res: Employee) => {
        alert('Employee Saved Successfully');
      },
      error: (error) => {
        alert('API Error: ' + error.error);
      },
    });
  }

  onUpdateEmployee() {
    this.employeeService.updateEmployee(this.employeeObj).subscribe({
      next: (res: Employee) => {
        alert('Employee Updated Successfully');
      },
      error: (error) => {
        alert('API Error: ' + error.error);
      },
    });
  }
  // getDesignation() {
  //   this.employeeService
  //     .getDesignationByDeptId(this.employeeObj.departmentId)
  //     .subscribe((res: IDesignation[]) => {
  //       // alert('Sucess' + res);
  //       this.designationList = res;
  //     });
  // }

  getDesignation() {
    this.employeeService
      .getDesignationByDeptId(this.employeeObj.departmentId)
      .subscribe({
        next: (res: IDesignation[]) => {
          this.designationList = res;
        },
        error: (err) => {
          console.error('Failed to load designations', err);
        },
      });
  }
}
