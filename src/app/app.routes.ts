import { Routes } from '@angular/router';
import { EmployeeList } from './pages/employee-list/employee-list';
import { EmployeeForm } from './pages/employee-form/employee-form';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: EmployeeList,
    title: 'Employee List',
  },
  {
    path: 'new-employee',
    component: EmployeeForm,
    title: 'Employee Form',
  },
  {
    path: 'edit-employee/:id',
    component: EmployeeForm,
  },
  {
    path: '**',
    component: NotFound,
  },
];
