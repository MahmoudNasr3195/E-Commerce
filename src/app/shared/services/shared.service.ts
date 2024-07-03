import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  userToken:BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private _router:Router) {
    if(localStorage.getItem("userToken")){
      let token = JSON.stringify(localStorage.getItem('userToken'));
      this.userToken.next(token);
    }
  }

  setUserToken(){
    let token = JSON.stringify(localStorage.getItem('userToken'));
    this.userToken.next(token);
  }

  signOut(){
    localStorage.removeItem("userToken");
    this.userToken.next('');
    this._router.navigate(['/login']);
  }
}
