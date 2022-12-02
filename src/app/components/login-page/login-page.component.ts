import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string ="fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })

  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ?  this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";


  }

  onSubmit(){
    if(this.loginForm.valid){
      // Send the obj to database

    }
    else{
      //throw the error using toaster and with required fields
      this.validateAllFormsFields(this.loginForm);
    }
  }

  private validateAllFormsFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if (control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      } else if(control instanceof FormGroup){
        this.validateAllFormsFields(control)

      }
    })
  }

}
