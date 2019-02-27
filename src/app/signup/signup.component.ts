import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupservice: UserService;
  user: User;
  constructor(service: UserService, private router: Router) {
    this.signupservice = service;
    this.user = new User;
  }

  ngOnInit() {

  }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }

  signup() {
    let get = localStorage.getItem('Users');
    this.signupservice.users = JSON.parse(get);
    localStorage.clear();
    this.signupservice.users.push(this.user);
    localStorage.setItem('Users', JSON.stringify(this.signupservice.users));

  }
}
