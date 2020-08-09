import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import {EmployeeServiceService} from './employee-service.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
