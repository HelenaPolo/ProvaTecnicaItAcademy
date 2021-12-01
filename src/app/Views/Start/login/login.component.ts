import { Component } from "@angular/core";
import { UsersService } from "src/app/Services/users.service";
import { Router } from "@angular/router";
//import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email!: string;
  password!: string;
  //form!: FormGroup;


  constructor(
    public userService: UsersService, 
    public router: Router, 
    //private fb: FormBuilder
    ) {
      //this.createForm();
    }

    /*createForm(){
      this.form = this.fb.group({
        email: [this.email, [Validators.required]],
        password: [this.password, [Validators.required]]
      })
    }
    get isEmailInvalid() {
      return this.form.get('email')!.invalid && this.form.get('email')!.touched;
    }
    get isPasswordInvalid() {
      return this.form.get('password')!.invalid && this.form.get('pasword')!.touched;
    }
    submit() {
      if (this.form.invalid) {
        // Si el form es inválido, márcamos los controles como "touched" para que se marquen/muestren los errores
        return Object.values(this.form.controls).forEach((control) => {
          control.markAsTouched();
        });
      }
       this.login();
    }*/

  login() {
    const user = {
      email: this.email, 
      password: this.password
    }
    this.userService.login(user).subscribe( data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }
}