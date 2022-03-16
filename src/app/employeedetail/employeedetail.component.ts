import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  public employee=[];

  constructor( private _employeeservice : EmployeeserviceService) { }

  ngOnInit(): void {
    this.employee=this._employeeservice.employeeservice();
  }

}
