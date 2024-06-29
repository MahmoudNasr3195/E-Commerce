import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../../shared/style/authStyle.scss']
})
export class LoginComponent {
  
  lang = localStorage.getItem("lang");

  loginForm:FormGroup = this._formBuilder.group({
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl ('',[Validators.required])
  })

  constructor(private _formBuilder: FormBuilder) { }

  get form(){
    return this.loginForm.controls
  }

  login(form:FormGroup){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.valid){}
  }

}
