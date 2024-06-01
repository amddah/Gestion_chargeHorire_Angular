import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Intervention } from './intervention';
import { Observable } from 'rxjs';
import { EnseignantIntervention } from "./enseignant-intervention";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly API_URL = "http://localhost:8010" ;

  readonly ENDPOINT_Intervention ="/intervention";

  constructor(private http:HttpClient) { }

  getIntervention(email:string){
    return this.http.get<EnseignantIntervention[]>(this.API_URL+this.ENDPOINT_Intervention+'/'+email);
  }

  getCount(){
    const url =`${this.API_URL}${this.ENDPOINT_Intervention}/count`;
    return this.http.get<any>(url);
  }

  addIntervention(intervention:Intervention):Observable<any>{
    const url =this.API_URL+this.ENDPOINT_Intervention;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(url,intervention)
  }

  getEnseignantIntervention(){
    const url =`${this.API_URL}${this.ENDPOINT_Intervention}/enseignantModule`;

    return this.http.get<any>(url);
  }
}
