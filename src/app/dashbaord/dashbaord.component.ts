import { Component } from '@angular/core';
import { Intervention } from './intervention';
import { DashboardService } from './dashboard.service';
import { ModuleService } from "../module/module.service";
import { EnseignantService } from "../enseignant/enseignant.service";
import { Enseignant } from "../enseignant/enseignant";
import { Module} from "../module/module";

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent {

  intitule :string ='Sélectionner la filière';
  email :string ='';
  
  vhcoursInter :any;
  vhtdInter:any;
  evaluationInter: any;
  vhtpInter:any;
   
  interventions :Intervention[]=[];
  enseignants :Enseignant[] =[];
  modules:Module[] =[];
  enseignantSelectione :Enseignant|any;
  countModules :number=0;

  countEnseignant:number =0;
  countFiliere:number =0;

 
  

  afficherFormulaireInter =false;
  affichermodalEns = false;

  constructor
  (
    private dashboardService:DashboardService, 
    private moduleService:ModuleService,
    private enseignantService:EnseignantService,
    
  ){}


  ngOnInit(){
    this.getInterventions();
    this.countModule();
    this.getModules();
  }
//récupérer les interventions
  getInterventions(){
    this.dashboardService.getIntervention().subscribe((data:Intervention[])=>{
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
        this.getInterventions();
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
  
  
}
