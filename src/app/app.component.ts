import { Component } from '@angular/core';
import {  AuthServiceService } from "./login/auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionChargeH';

  showProfil =true;

  isLoggedIn: boolean = false;

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
  
   if (localStorage.getItem("jwt")) {
    this.isLoggedIn=true;
   }
  }

  
}
