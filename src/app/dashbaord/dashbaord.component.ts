import { Component } from '@angular/core';
import { Intervention } from './intervention';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent {

  interventions :Intervention[]=[];

  constructor(private dashboardService:DashboardService){}


  ngOnInit(){
    this.getInterventions();
  }

  getInterventions(){
    this.dashboardService.getIntervention().subscribe((data:Intervention[])=>{
      this.interventions=data;
      console.log("Get intervention Ok!"+this.interventions);
    },(error)=>{
      console.log("error en get intervention !"+error);
      
    })
  }
}
