import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import {EmployeeServiceService} from './employee-service.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductsAddEditComponent } from './products-add-edit/products-add-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    EmployeeDetailsComponent,
    ProductsComponent,
    ProductsAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
