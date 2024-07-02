import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInDTO } from '../interfaces/sign-in-dto';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private _httpClient:HttpClient) {}

  signIn(data:SignInDTO):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,data);
  }
}
