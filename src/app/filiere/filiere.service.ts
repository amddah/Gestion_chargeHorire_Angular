import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Filiere } from './filiere';
import { Observable } from 'src/assets/vendor/tinymce/tinymce';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  readonly API_URL = "http://localhost:8010" ;

  readonly ENDPOINT_Filieres ="/filieres";


  constructor(private http:HttpClient) { }

  getFilieres(){
    return this.http.get<Filiere[]>(this.API_URL+this.ENDPOINT_Filieres).pipe(
      catchError(this.handleError)
    );
  }
  addFiliere(filiere: Filiere) {
    const url = `${this.API_URL}${this.ENDPOINT_Filieres}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(url, filiere, httpOptions).pipe(
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

}
