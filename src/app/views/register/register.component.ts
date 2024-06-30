import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { SignUpService } from './service/sign-up.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../../shared/style/authStyle.scss']
})
export class RegisterComponent {
  lang = localStorage.getItem("lang");
  errorMsg:any ='';
  isLoading:boolean = false;

  registerForm: FormGroup = this._formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,7}$/)]),
    rePassword: new FormControl('', [RxwebValidators.compare({ fieldName: 'password' }), Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,7}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125]-[0-9]{8}$/)])
  })

  constructor(private _formBuilder: FormBuilder, private _signUpService: SignUpService) { }

  get form() {
    return this.registerForm.controls
  }

  register(form: FormGroup) {
    this.registerForm.markAllAsTouched();
    const formData = this.registerForm.value;
    if (this.registerForm.valid) {
      debugger
      this.isLoading = true;
      formData.phone = formData.phone.replace(/[^0-9 ]/g, "");
      this._signUpService.signUp(this.registerForm.value).subscribe({
        next(value:any) {
          debugger
          console.log(value)
        },
        error(err) {
          debugger

        },
        complete() {
          debugger
          console.log("Complete");

        },
      })
    }
  }
}
