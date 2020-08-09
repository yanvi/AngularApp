import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getDepartments()
  {
    var departments = [
   { "Id": "1" , "Name" :"IT"},
   { "Id":"2"  , "Name" :"ADMIN"},
   { "Id": "3", "Name" :"HR"},
   { "Id": "4" , "Name" :"OPERATION"},
   { "Id": "5" , "Name" :"ACCOUNT"}
    ];

    return departments;
  }
  

  getEmployees()
  {
    var  employees = [
      { "Id" :"1001" , "Name" :"A1", "Age": 30},
      { "Id" :"1002" , "Name" :"A2", "Age": 40},
      { "Id" :"1003" , "Name" :"A3", "Age": 50},
      { "Id" :"1004" , "Name" :"A4", "Age": 60},
      { "Id" :"1005" , "Name" :"A5", "Age": 70},
      { "Id" :"1006" , "Name" :"A6", "Age": 80}
     
       ] ;
       return employees ;
  }
  }

