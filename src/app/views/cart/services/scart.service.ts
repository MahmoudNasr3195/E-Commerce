import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/base/enviroment';
import { IshippingAddress } from '../interfaces/ishipping-address';

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
  UpdateCartProductQuantity(productId: string, count: number): Observable<any> {
    return this._httpClient.put(`${environment.baseUrl}/api/v1/cart/${productId}`,
      {
        count: count
      }
      ,
      {
        headers: {
          token: `${this.myHearders}`
        }
      })
  }

  GetLoggedUserCart(): Observable<any> {
    return this._httpClient.get(`${environment.baseUrl}/api/v1/cart`,
      {
        headers: {
          token: `${this.myHearders}`
        }
      })
  }

  RemoveSpecificCartItem(productId: string): Observable<any> {
    return this._httpClient.delete(`${environment.baseUrl}/api/v1/cart/${productId}`,
      {
        headers: {
          token: `${this.myHearders}`
        }
      })
  }

  ClearUserCart(): Observable<any> {
    return this._httpClient.delete(`${environment.baseUrl}/api/v1/cart`,
      {
        headers: {
          token: `${this.myHearders}`
        }
      })
  }

  CreateCashOrder(cartId:string,data:IshippingAddress): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/orders/${cartId}`,
      {
        shippingAddress: data
      }
      ,
      {
        headers: {
          token: `${this.myHearders}`
        }
      })
  }

  CheckoutSession(cartId:string,data:IshippingAddress): Observable<any> {
    return this._httpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: data
      }
      ,
      {
        headers: {
          token: `${this.myHearders}`
        }
      })
  }
}
