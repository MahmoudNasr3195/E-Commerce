import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  lang = localStorage.getItem("lang");
  isLogin:boolean = false;

  constructor(private _sharedService:SharedService){}
  
  ngOnInit(): void {
    this._sharedService.userToken.subscribe({
      next:() =>{
       if(this._sharedService.userToken.getValue()) this.isLogin = true
       else this.isLogin = false
      }
    })
  }
}
