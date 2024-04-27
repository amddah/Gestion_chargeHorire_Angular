import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Enseignant } from './enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  readonly API_URL = "http://localhost:4000" ;

  readonly ENDPOINT_Enseignant ="/enseignants";

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

}
