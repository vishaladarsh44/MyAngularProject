import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list-it',
  templateUrl: './employee-list-it.component.html',
  styles: [
  ]
})
export class EmployeeListItComponent implements OnInit {


  public employee=[];

  constructor( private _employeeservice: EmployeeserviceService) { }

  ngOnInit(): void  {
    this.employee = this._employeeservice.employeeservice();
    
  }

}
