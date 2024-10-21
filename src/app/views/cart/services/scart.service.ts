import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SCartService {

  myHearders = localStorage.getItem('userToken');

  constructor(private _httpClient: HttpClient) { }

  AddProductToCart(productId: string): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/cart`,
      {
        productId: productId,
      }
      ,
      {
        headers: {
          token: `${this.myHearders}`
        }
      })
  }
}
