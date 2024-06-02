import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Filiere } from './filiere';
import { Observable } from 'src/assets/vendor/tinymce/tinymce';
import { ModuleFiliereCount } from "../filiere/module-filiere-count";
@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  readonly API_URL = "http://localhost:8010" ;

  readonly ENDPOINT_Filieres ="/filieres";


  constructor(private http:HttpClient) { }

  getFilieres(){
    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Filiere[]>(this.API_URL+this.ENDPOINT_Filieres,{headers}).pipe(
      catchError(this.handleError)
    );
  }
  addFiliere(filiere: Filiere) {
    const url = `${this.API_URL}${this.ENDPOINT_Filieres}`;

    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url, filiere, {headers}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getCountModulesByFiliere(){
    const url = `${this.API_URL}/modules/countByFiliere`;

    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   return this.http.get<ModuleFiliereCount[]>(url,{headers});
  }

  getModuleByFiliere(nomFiliere:string){
    const url = `${this.API_URL}/modules/getModuleByfiliere/${nomFiliere}`;

    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<string[]>(url,{headers});
  }

}
