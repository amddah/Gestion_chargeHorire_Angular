import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Module } from './module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  readonly API_URL = "http://localhost:8010" ;

  readonly ENDPOINT_Modules ="/modules";

  constructor(private http:HttpClient) { }

  getModules(){
    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   return this.http.get<Module[]>(this.API_URL+this.ENDPOINT_Modules,{headers});
  }


  addModule(module:Module):Observable<any>{
    const url =this.API_URL+this.ENDPOINT_Modules;
    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(url,module,{headers});
  }


  deleteModule(intitule:string):Observable<any>{

    const url = `${this.API_URL}${this.ENDPOINT_Modules}/${intitule}`;

    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(url,{headers});
  }

  getModuleByIntitule(intitule:string) :Observable<any>{

    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.API_URL}${this.ENDPOINT_Modules}/${intitule}`;
    return this.http.get<Module>(url,{headers});

  }

  updateModule(module:Module):Observable<any>{

    const token = localStorage.getItem('jwt'); // Assurez-vous que le token est stocké localement après login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.API_URL}${this.ENDPOINT_Modules}/${module.intitule}`;
    return this.http.put<any>(url,module,{headers});
  }

}
