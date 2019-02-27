import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  private username : string;
  signupservice: UserService;
  private subscripion : Subscription;
  user: any;

  constructor(service: UserService,private route : ActivatedRoute, private router: Router) {
    this.signupservice = service;
   }

  ngOnInit() {
    this.subscripion = this.route.params.subscribe(
      (params : Params) => {
          this.username = params["username"]; // cast to number
          console.log(this.username)
      });
      let getusers = localStorage.getItem('Users');
      this.signupservice.users = JSON.parse(getusers);
      this.user = this.signupservice.users.filter(e => e.username == this.username );
      console.log(this.user[0].name);
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
