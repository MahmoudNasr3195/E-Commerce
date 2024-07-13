import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {

  constructor(private _httpClient:HttpClient) { }

  getAllSubcategories():Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories`);
  }

  getSpecificSubCategory(subcategoryId:string):Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${subcategoryId}`);
  }

  getAllProducts():Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  
}
