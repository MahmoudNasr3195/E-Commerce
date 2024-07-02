import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpDTO } from '../interfaces/sign-up-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _httpClient:HttpClient) {}

  signUp(data:SignUpDTO):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,data);
  }
}
