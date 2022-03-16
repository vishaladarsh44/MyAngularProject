import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  employeeservice(){
    return [
      { "id": 1 , "name":"Adarsh"},
      { "id": 2 , "name":"Osama"},
      { "id": 3 , "name":"Malik"},
      { "id": 4 , "name":"Rupesh"},
      { "id": 5 , "name":"Avinash"}
  ];
  }

  constructor() { }
}
