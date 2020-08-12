import { Component, OnInit, ViewChild , Input, OnDestroy, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable, throwError,Subscription } from 'rxjs';
import {ProductService} from '../product.service' ;

declare var $: any;
@Component({
  selector: 'app-products-add-edit',
  templateUrl: './products-add-edit.component.html',
  styleUrls: ['./products-add-edit.component.css']
})
export class ProductsAddEditComponent implements OnInit,OnDestroy{

  @Input() modalOpen: Observable<any>;

  @Output() notiferForParent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  title: string;
  categorys =[] ;
  eventsSubscription: Subscription;

  constructor(public fb: FormBuilder
    ,private productService: ProductService
   ) { 
    this.initEmptyForm();
  }

  ngOnInit(): void {
    this.eventsSubscription = this.modalOpen.subscribe(({data}) => this.modalOpenClickedOnParent(data));
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  submitForm() {
    console.log(this.form.value)
    if(this.form.value.mode == 'EDIT'){
      this.postEdit();
    } else if(this.form.value.mode == 'ADD'){
      this.postAdd();
    }
  }

  postEdit(){
    
    let product = this.form.value;
    this.productService.editProduct(this.form.value.id,product).subscribe((data: any[])=>{
      console.log(data);
     
      $("#btnClose").click();
      this.notiferForParent.emit(this.form.value);
    });
  }

  postAdd(){

    let product = this.form.value;
    
    const unixTime = Math.floor(Date.now() / 1000);
    product.supplierId=  parseInt(product.supplierId);
    product.categoryId=  parseInt(product.categoryId);

    product.id = unixTime;
    this.productService.addProduct(this.form.value).subscribe((data: any[])=>{
      console.log(data);
      $("#btnClose").click();
      this.notiferForParent.emit(this.form.value);
    });
  }

  initEmptyForm() {

    this.form = this.fb.group({
         id: [''],
        productName: [''],
        supplierId: [0],
        categoryId: [0] ,
        // quantityPerUnit: [0],
        // unitPrice: [0],
        // unitsInStock: [0],
        // unitsOnOrder: [0],
        // reorderLevel: [0],
        // discontinued: [0],
        mode: ['ADD'],
    });
  }

  getCategory() {
    
    this.productService.getCategory().subscribe((data)=> {
      this.categorys= data ;
    
    });
  }

  modalOpenClickedOnParent(data){
   this.getCategory();
    this.initEmptyForm();
    if(data.mode == "ADD") {
      this.title = "Add New Product";
    } else if(data.mode == "EDIT") {
      this.title = "Edit Selected Product";
      let product = data.product;
      this.form = this.fb.group({
        id: [product.id],
        productName: [product.productName],
        supplierId: [product. supplierId],
        categoryId: [product.categoryId],
        quantityPerUnit: [product.quantityPerUnit],
        unitPrice: [product.unitPrice],
        unitsInStock: [product.unitsInStock],
        unitsOnOrder: [product.unitsOnOrder],
        reorderLevel: [product.reorderLevel],
        discontinued: [product.discontinued],
        mode: [data.mode],
      });
    }
    $("#product-add-edit-model").modal('show');
  }
}
