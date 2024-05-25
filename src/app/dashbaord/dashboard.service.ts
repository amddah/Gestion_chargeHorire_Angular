import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Intervention } from './intervention';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly API_URL = "http://localhost:8010" ;

  readonly ENDPOINT_Intervention ="/intervention";

  constructor(private http:HttpClient) { }

  getIntervention(){
    return this.http.get<Intervention[]>(this.API_URL+this.ENDPOINT_Intervention);
  }

  getCount(){
    const url =`${this.API_URL}${this.ENDPOINT_Intervention}/count`;
    return this.http.get<any>(url);
  }
}
