import { Component } from '@angular/core';
import { AuthServiceService } from "./auth-service.service";
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string ='';
  password :string ='';

  errorMessage:string='Invalid Credentiels';
  successMessage: string ='';
  invalidLogin =false;
  loginSuccess=false;
  isLoggedIn =true;

  constructor(private authService:AuthServiceService,private router:Router){}

  ngOnInit(){

    if (localStorage.getItem("jwt")) {
      
      this.isLoggedIn =false;
      this.router.navigateByUrl("/dashboard");
    }
  }

  handleLogin(){

    const user ={
      email :this.email,
      password: this.password
    }
   this.authService.login(user).subscribe((response:any)=>{

  
    this.router.navigateByUrl("/dashboard");
    window.location.reload();
    this.authService.isLoggedIn=false;
    this.invalidLogin = false;
      this.loginSuccess = true;
      this.isLoggedIn =false;
      this.successMessage = 'Login Successful';
      const jwtToken = response.jwt;
          localStorage.setItem('jwt', jwtToken);
          
          
   },() => {
    this.invalidLogin = true;
    this.loginSuccess = false;
  })
    
  }
}
