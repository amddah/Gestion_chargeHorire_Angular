import { Component } from '@angular/core';
import { Intervention } from './intervention';
import { DashboardService } from './dashboard.service';
import { ModuleService } from "../module/module.service";
import { EnseignantService } from "../enseignant/enseignant.service";
import { Enseignant } from "../enseignant/enseignant";
import { Module} from "../module/module";
import { EnseignantIntervention } from "./enseignant-intervention";

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent {

  intitule :string ='Sélectionner la filière';
  email :string ='';
  enseignantModule:string[]=[];
  
  vhcoursInter :any;
  vhtdInter:any;
  evaluationInter: any;
  vhtpInter:any;
   
  interventions :EnseignantIntervention[]=[];
  enseignants :Enseignant[] =[];
  modules:Module[] =[];
  enseignantSelectione :Enseignant|any;
  countModules :number=0;

  countEnseignant:number =0;
  countFiliere:number =0;

 
  

  afficherFormulaireInter =false;
  affichermodalEns = false;
  afficheDetail=false;

  constructor
  (
    private dashboardService:DashboardService, 
    private moduleService:ModuleService,
    private enseignantService:EnseignantService,
    
  ){}


  ngOnInit(){
   
    this.countModule();
    this.getModules();
    this.getEnseignantIntervention();
    
  }
//récupérer les interventions
  getInterventions(email:string){
    this.dashboardService.getIntervention(email).subscribe((data:EnseignantIntervention[])=>{
      this.interventions=data;
      console.log("Get intervention Ok!"+this.interventions);
    },(error)=>{
      console.log("error en get intervention !"+error);
      
    }) 
  }
  //récupérer les Ensiegnants
  getEnseiganant(){
    this.enseignantService.getEnseignants().subscribe(
      (datas : Enseignant[])=>{
        this.enseignants =datas
        console.log(this.enseignants);
      },(error)=>{
        console.log("error lors "+error);
      }
    
    )
    
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

  onSubmit(){


    const newIntervention ={
      email :this.email,
      intitule:this.intitule,
      vhcoursInter :this.vhcoursInter,
      vhtdInter:this.vhcoursInter,
      evaluationInter: this.evaluationInter,
      vhtpInter:this.vhtpInter
    }

    this.dashboardService.addIntervention(newIntervention).subscribe(
      response => {
        console.log('ajout de inter avec succès', response);
        this.getEnseignantIntervention();
        this.toggleFormulaire();
        
      },
      error => {
        console.error('Erreur lors de l ajout de interv', error);
       
      }
    )


  }

  toggleFormulaire(enseignant:string =""){
    this.afficherFormulaireInter=!this.afficherFormulaireInter;
    this.email=enseignant;
    console.log("toggle "+enseignant);
    
  }


  getModules(){
    this.moduleService.getModules().subscribe((data:Module[])=>{
      this.modules =data;
      console.log("Get modules Ok !"+this.modules);
      this.intitule=data[0].intitule;
    },(error)=>{
      console.log("error en get modules"+error);
      
    })
  
    
  }

  getEnseignantIntervention(){

    this.dashboardService.getEnseignantIntervention().subscribe(

      (response)=>{
        this.enseignantModule =response;
        console.log(this.enseignantModule );
        
      }
    )
  }
  
  
}
