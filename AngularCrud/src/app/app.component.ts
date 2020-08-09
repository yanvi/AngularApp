import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './Second-Page.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   employees =[] ;
   departments =[] ;
  title = 'welcome to angular js application';
  public name="";
  isDisplay =true ;
  constructor(private empService:EmployeeServiceService){}
  ngOnInit()
  {
this.employees = this.empService.getEmployees();
this.departments =this.empService.getDepartments();
  }
  
 
  public colors = ["RED","GREEN", "BLUE","ORANGE"] ;

  public message="Welcome to angular js programming  language" ;

  public person = { "FirstName":"Vinay" , "LastName":"Pandey" } ;
  
  public date = new Date();

 
   Add( firstNo ,  secondNo){
    alert(firstNo+secondNo);
      }

  logMessage (value){

    alert(value);
    
  }
  

}
