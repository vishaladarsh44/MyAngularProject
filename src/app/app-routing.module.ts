import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListItComponent } from './department-list-it/department-list-it.component';
import { EmployeeListItComponent } from './employee-list-it/employee-list-it.component';

const routes: Routes = [
  {path:'department' ,component: DepartmentListItComponent},
  { path:'employee' , component:EmployeeListItComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentListItComponent,EmployeeListItComponent]
