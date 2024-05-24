import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { from, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Enseignant } from './enseignant';


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  readonly API_URL = "http://localhost:8010" ;

  readonly ENDPOINT_Enseignant ="/enseignant";

  constructor(private http:HttpClient) { }

  getEnseignants(){
    return this.http.get<Enseignant[]>(this.API_URL+this.ENDPOINT_Enseignant)
  }

  addEnseignant(enseignant: Enseignant): Observable<any> {
    // URL de l'endpoint pour l'ajout d'un enseignant
    const url = this.API_URL + this.ENDPOINT_Enseignant;

    // Headers pour définir le type de contenu
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Effectue la requête POST avec les données de l'enseignant
    return this.http.post<any>(url, enseignant, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteEnseignant(email: string): Observable<any> {
    const url = `${this.API_URL}${this.ENDPOINT_Enseignant}/${email}`; // Ajouter l'email à l'URL
   
    
  return this.http.delete<any>(url).pipe(
    catchError(this.handleError)
  );

  //return from( response);
  }
  

  updateEnseignant(enseignant:Enseignant){
    const url = `${this.API_URL}${this.ENDPOINT_Enseignant}/${enseignant.email}`;

    return this.http.put<Enseignant>(url,enseignant).pipe(
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
