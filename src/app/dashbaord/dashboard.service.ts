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
    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<EnseignantIntervention[]>(this.API_URL+this.ENDPOINT_Intervention+'/'+email,{headers});
  }

  getCount(){
    const url =`${this.API_URL}${this.ENDPOINT_Intervention}/count`;
    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(url,{headers});
  }

  addIntervention(intervention:Intervention):Observable<any>{
    const url =this.API_URL+this.ENDPOINT_Intervention;

    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(url,intervention,{headers})
  }

  getEnseignantIntervention(){
    const url =`${this.API_URL}${this.ENDPOINT_Intervention}/enseignantModule`;
    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(url,{headers});
  }
}
