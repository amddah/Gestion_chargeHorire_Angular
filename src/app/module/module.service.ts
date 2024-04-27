import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ModuleModule } from './module.module';
@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  readonly API_URL = "http://localhost:4000" ;

  readonly ENDPOINT_Modules ="/modules";

  constructor(private http:HttpClient) { }

  getModules(){
   return this.http.get<ModuleModule[]>(this.API_URL+this.ENDPOINT_Modules);
  }


}
