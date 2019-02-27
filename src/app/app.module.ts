import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
const routes: Routes = [
{ path: '', component: SignupComponent},
{ path: 'login', component: LoginComponent},
{ path: 'user/:username', component: UserdetailsComponent, data: { name : ''}}
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UserdetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
