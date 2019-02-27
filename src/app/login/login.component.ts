import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupservice: UserService;
  username: string; password: string;
  displayError: boolean = false;
  constructor(service: UserService, private router: Router) {
    this.signupservice = service;
   }

  ngOnInit() {
  }

  checkLogin(){
    let getusers = localStorage.getItem('Users');
    this.signupservice.users = JSON.parse(getusers);
    let user = this.signupservice.users.filter(e => e.username == this.username && e.password == this.password);
    console.log(user[0].username);
    if(user.length > 0)
      this.router.navigate(['/user', user[0].username]);
    else
      this.displayError = true;
  }

  redirectToSignup() {
    this.router.navigateByUrl('/');
  }
}
