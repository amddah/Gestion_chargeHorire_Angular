import { Component } from '@angular/core';
import { ModuleService } from './module.service';
import { Module } from './module';
import { DeleteServiceService } from '../shared/componants/modal/delete-service.service';
import { FiliereService } from "../filiere/filiere.service";
import { Filiere } from "../filiere/filiere";

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

  module:Module |any;

  intitule:string ='';

  vHcours :any;
  
  vHTd:any ;
  
  vHTp: any ;
  
  evaluation:any;

  nomFiliere:string ='Sélectionner la filière';

  modules:Module[] =[];
  fil:Filiere[] =[];
  page = 1;
 
  afficherFormulaire = false;
  intituleDisabled=false;
  alertErreur =false;

  
  constructor(
    private moduleService:ModuleService,
    private deleteService:DeleteServiceService,
    private filiereService:FiliereService,
   
  ){}


ngOnInit(){
  this.getModules();
  this.getFilieres();

}  

getModules(){
  this.moduleService.getModules().subscribe((data:Module[])=>{
    this.modules =data;
    console.log("Get modules Ok !"+this.modules);
    
  },(error)=>{
    console.log("error en get modules"+error);
    
  })

  
}
getFilieres(){
  this.filiereService.getFilieres().subscribe((data:Filiere[])=>{
    this.fil =data;
    console.log("get filiers Ok!"+ data);
    
  },(error)=>{
    console.log("error on getFileres"+error);
    
  })
}
// Méthode pour afficher le formulaire d'ajout ou de modification
  toggleFormulaire() {

    this.afficherFormulaire = !this.afficherFormulaire;
    this.intituleDisabled =false;
    this.alertErreur =false;

    //vider la formulaire
    this.intitule='';
    this.vHcours="";
    this.vHTd = '';
    this.vHTp= '';
    this.evaluation ='';
    this.nomFiliere ='Sélectionner la filière';

    
  }
 

  update(module:Module){

    this.afficherFormulaire = true;
    this.intituleDisabled =true;

    //rempli la formulaire avec module selectionner
      this.intitule =module.intitule;

      this.vHcours=module.vhcours;
      
      this.vHTd = module.vhtd;
      
      this.vHTp= module.vhtp;
      
      this.evaluation =module.evaluation;

      this.nomFiliere =module.nomFiliere;
    
  }


  delete(intitule:string){

    this.deleteService.confirmDelete().then((confirmed) => {
      if (confirmed) {
        this.moduleService.deleteModule(intitule).subscribe(
          response => {
            console.log('module supprimer avec succès', response);
           this.getModules();
            
          },
          error => {
            console.error('Erreur lors de suprission de module', error);
           
          }
        )
        console.log("  module supprimer avec succes"+intitule);
        
      }else{
        console.log("not confirmend"+confirmed);
        
      }
    });
    
  }


  onSubmit(){
    const newModule :Module={
      intitule:this.intitule,

      vhcours :this.vHcours,
      
      vhtd:this.vHTd,
      
      vhtp: this.vHTp,
      
      evaluation:this.evaluation,

      nomFiliere:this.nomFiliere
    }

    if (this.nomFiliere=='Sélectionner la filière') {
      this.alertErreur =true;
    }
    //verifie si le module existe si oui modifie sinon ajouter 
    
    if (this.intituleDisabled) {
      this.moduleService.updateModule(newModule).subscribe(
        response => {
          console.log('module modifie avec succès', response);
          this.getModules();
          this.toggleFormulaire();
          
        },
        error => {
          console.error('Erreur lors de modification de module', error);
         
        }
      )
      
    } else {

    this.moduleService.addModule(newModule).subscribe(
      response => {
        console.log('module ajouté avec succès', response);
        this.getModules();
        this.toggleFormulaire();
        
      },
      error => {
        console.error('Erreur lors de l\'ajout de module', error);
       
      }
    );
  }
 
  }

  getModuleByIntitule(intitule:string){

    this.moduleService.getModuleByIntitule(intitule).subscribe(
      (data:Module)=>{
        this.module =data;
      }
    )
  }
  
}
