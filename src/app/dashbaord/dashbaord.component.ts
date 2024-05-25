import { Component } from '@angular/core';
import { Intervention } from './intervention';
import { DashboardService } from './dashboard.service';
import { ModuleService } from "../module/module.service";

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent {

  interventions :Intervention[]=[];

  countModules :number=0;

  countEnseignant:number =0;
  countFiliere:number =0;

  constructor(private dashboardService:DashboardService, private moduleService:ModuleService){}


  ngOnInit(){
    this.getInterventions();
    this.countModule();
  }

  getInterventions(){
    this.dashboardService.getIntervention().subscribe((data:Intervention[])=>{
      this.interventions=data;
      console.log("Get intervention Ok!"+this.interventions);
    },(error)=>{
      console.log("error en get intervention !"+error);
      
    })
  }



  countModule(){
    this.dashboardService.getCount().subscribe(
      (data)=>{
        this.countModules=data.module;
        this.countEnseignant =data.enseignant;
        this.countFiliere =data.filiere;
        console.log("get count Ok ",data);
        
      },(error)=>{
        console.log("error en getCount"+error);
        
      }
    )
  }
}
