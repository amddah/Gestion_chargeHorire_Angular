import { Component } from '@angular/core';
import { ModuleService } from './module.service';
import { Module } from './module';
import { DeleteServiceService } from '../shared/componants/modal/delete-service.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

  modules:Module[] =[];

  afficherFormulaire = false;
  moduleSelectionner :any;

  constructor(private moduleService:ModuleService,private deleteService:DeleteServiceService){}


ngOnInit(){
  this.getModules();
}  

getModules(){
  this.moduleService.getModules().subscribe((data:Module[])=>{
    this.modules =data;
    console.log("Get modules Ok !"+this.modules);
    
  },(error)=>{
    console.log("error en get modules"+error);
    
  })

  
}
// Méthode pour afficher le formulaire d'ajout ou de modification
  toggleFormulaire() {
    this.afficherFormulaire = !this.afficherFormulaire;
  }
 

  update(module:any){

    this.afficherFormulaire = true;

    this.moduleSelectionner=module;
  }


  delete(module:any){

    this.deleteService.confirmDelete().then((confirmed) => {
      if (confirmed) {
        console.log(" hhhh module"+module);
        
      }else{
        console.log("hhhhhhhhhhhhhhhhh"+confirmed);
        
      }
    });
    
  }


  
}
