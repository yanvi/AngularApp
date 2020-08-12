import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ProductService} from '../product.service' ;

import { Subject } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categorys =[] ;
  products =[] ;
  modalOpenSubject: Subject<any> = new Subject<any>();
  constructor( private formBuilder: FormBuilder , private productservice: ProductService ) {}
     
  addForm: FormGroup;
  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      Id: '',
      Name: ['', Validators.required],
      Description: '',
      Status: [true, Validators.required],
    });

this.getCategory();
this.getProductList();
  }



  getCategory() {
    
    this.productservice.getCategory().subscribe((data)=> {
      this.categorys= data ;
    
    });
  }

  getProductList()
  {
  
    this.productservice.getProductList().subscribe( (data)=>{
      this.products = data;
    
    });
  }

  openAddNewModa() {
    this.modalOpenSubject.next({
      data: {
        mode : "ADD"
      }
    });
  }

  notificationFromChild(data) {
    this.getProductList();
  }
  

}
