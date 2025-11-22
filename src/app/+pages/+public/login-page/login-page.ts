import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  username:string='';
  password:string='';
  remember:boolean=false;
  router=inject(Router);
  message:string='';
  check(){
if (this.username=='admin' && this.password=='admin') {
    this.router.navigateByUrl('/public')
} else {
    this.message='نام کاربری یا کلمه عبور صحیح نیست'
}
  }
}
