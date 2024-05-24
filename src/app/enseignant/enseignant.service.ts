import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from "@angular/common/http";
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
    return this.http.post<any>(url, enseignant, httpOptions);
  }

  deleteEnseignant(email: string): Observable<any> {
    const url = `${this.API_URL}${this.ENDPOINT_Enseignant}/${email}`; // Ajouter l'email à l'URL
    console.log(url);
    
  const response= this.http.delete<any>(url).toPromise(); // Faire une requête DELETE vers l'URL construite

  return from( response);
  }
  

}
