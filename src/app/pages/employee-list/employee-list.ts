import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Employee, IEmployeeList } from '../../model/employee';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [DatePipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  empService = inject(EmployeeService);
  router = inject(Router);
  employeeList: IEmployeeList[] = [];
  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.empService.getAllEmployee().subscribe((res: IEmployeeList[]) => {
      this.employeeList = res;
    });
  }

  onEditEmployee(id: number) {
    this.router.navigateByUrl('/edit-employee/' + id);
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.empService.deleteEmployeeById(id).subscribe((res: any) => {
        alert('Deleted Successfully');
        this.getEmployee();
      });
    }
  }
}
