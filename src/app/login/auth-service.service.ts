import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { map,tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';

const BASE_URL = ["http://localhost:8010/"]

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isLoggedIn =false;

  
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) {}




  register(signRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'signup', signRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest)
  }

 

  private createAuhtorizationHeader() {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
    } else {
      console.log("JWT token not found in local storage");
    }
    return null;
  }

  getUser(email:string){
    return this.http.get<any>(BASE_URL+`/getUser/${email}`)

  }
  getIsLoggedIn(){
    return this.isLoggedIn
  }
}
