import { Component } from '@angular/core';
import { ModuleModule } from './module.module';
import { ModuleService } from './module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

  modules:ModuleModule[] =[];

  afficherFormulaire = false;
  moduleSelectionner :any;

  constructor(private moduleService:ModuleService){}


ngOnInit(){
  this.getModules();
}  

getModules(){
  this.moduleService.getModules().subscribe((data:ModuleModule[])=>{
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

    console.log("delete:"+ module);
    
  }


  
}
