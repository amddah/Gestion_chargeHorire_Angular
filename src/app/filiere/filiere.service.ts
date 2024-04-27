import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Filiere } from './filiere';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  readonly API_URL = "http://localhost:4000" ;

  readonly ENDPOINT_Filieres ="/filieres";


  constructor(private http:HttpClient) { }

  getFilieres(){
    return this.http.get<Filiere[]>(this.API_URL+this.ENDPOINT_Filieres)
  }
}
