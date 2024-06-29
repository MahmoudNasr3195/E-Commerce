import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','./../../shared/style/authStyle.scss']
})
export class RegisterComponent {
  lang = localStorage.getItem("lang");

  registerForm:FormGroup = this._formBuilder.group({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl ('',[Validators.required,Validators.pattern(/^[A_Z][a-z0-9]{4,8}$/)]),
    repassword : new FormControl('',[RxwebValidators.compare({fieldName:'password' }),Validators.required , Validators.pattern(/^[A_Z][a-z0-9]{4,8}$/)]),
    phone : new FormControl('',[Validators.required , Validators.pattern(/^05[03456789]-[0-9]{7}$/)])
  })

  constructor(private _formBuilder: FormBuilder) { }

  get form(){
    return this.registerForm.controls
  }

  register(form:FormGroup){
    this.registerForm.markAllAsTouched();
    if(this.registerForm.valid){
      
    }
  }
}
