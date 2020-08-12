import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import{IProduct} from './IProduct' ;
import{ICategory} from './ICategory';
import { Observable } from 'rxjs/observable';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  apiBaseUrl = 'https://dummy-crud-api-1.herokuapp.com/api';

  headers = new HttpHeaders();

  constructor( private http: HttpClient) {

    this.headers = this.headers.set('X-API-KEY', 'test-user');
   }

   getCategory():Observable<ICategory[]>
   {
return  this.http.get<ICategory[]>(this.apiBaseUrl+"/"+"categories",{
  headers:this.headers
});
}

getProductList():Observable<IProduct[]>
{
 return this.http.get<IProduct[]>(this.apiBaseUrl+"/"+"products",{
    headers:this.headers 
  });
}

deleteProduct(id) {
  return this.http.delete(this.apiBaseUrl+"/products/"+id,{
    headers:this.headers
  });
}

editProduct(id,product) {
  return this.http.put(this.apiBaseUrl+"/products/"+id,product,{
    headers:this.headers
  });
}

addProduct(product) {
  return this.http.post(this.apiBaseUrl+"/products",product,{
    headers:this.headers
  });
}
}

