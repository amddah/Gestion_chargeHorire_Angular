import { Component } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

  afficherFormulaire = false;

  toggleFormulaire() {
    this.afficherFormulaire = !this.afficherFormulaire;
  }


  moduleSelectionner :any;
  update(module:any){

    this.afficherFormulaire = true;

    this.moduleSelectionner=module;
  }

  delete(module:any){

    console.log("delete:"+ module);
    
  }


  modules=[
    {intitule:"JEE",vHcours :30,vHTd:2,vHTp:15,evaluation:2},
    {intitule:"DB",vHcours :30,vHTd:2,vHTp:15,evaluation:2},
    {intitule:"ASR",vHcours :30,vHTd:4,vHTp:15,evaluation:3},
  ]
}
