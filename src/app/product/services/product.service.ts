import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

 
//http://192.168.0.33:7070/api/products

import {environment} 
        from "../../../environments/environment";

@Injectable()
export class ProductService {

  constructor(private http: Http) { 

  }


  getProducts() {
    //192.168.0.33
    return this.http.get(environment.apiEndPoint + "/api/products")
  }


 

}
