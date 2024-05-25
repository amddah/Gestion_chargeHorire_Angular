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
   return this.http.get<Module[]>(this.API_URL+this.ENDPOINT_Modules);
  }


  addModule(module:Module):Observable<any>{
    const url =this.API_URL+this.ENDPOINT_Modules;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(url,module,httpOptions);
  }


  deleteModule(intitule:string):Observable<any>{

    const url = `${this.API_URL}${this.ENDPOINT_Modules}/${intitule}`;

    return this.http.delete<any>(url);
  }

  getModuleByIntitule(intitule:string) :Observable<any>{

    const url = `${this.API_URL}${this.ENDPOINT_Modules}/${intitule}`;
    return this.http.get<Module>(url);

  }

  updateModule(module:Module):Observable<any>{

    const url = `${this.API_URL}${this.ENDPOINT_Modules}/${module.intitule}`;
    return this.http.put<any>(url,module);
  }

}
