import { Component } from '@angular/core';
import { FiliereService } from './filiere.service';
import { Filiere } from './filiere';
import { count } from 'rxjs';
import { ModuleFiliereCount } from "../filiere/module-filiere-count";

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent {

  filieres :Filiere[] =[];
  moduleFiliereCount:ModuleFiliereCount[]=[];
  nomFiliere:string='';

  afficherFormulaire =false;

  constructor(private filiereService:FiliereService){}

  ngOnInit(){
    this.getCountModuleByFiliere();
  }

 
  toggleFormulaire(){
    this.afficherFormulaire=!this.afficherFormulaire;
    this.nomFiliere='';
  }

  getFilieres(){
    this.filiereService.getFilieres().subscribe((data:Filiere[])=>{
      this.filieres =data;
      console.log("get filiers Ok!"+this.filieres);
      
    },(error)=>{
      console.log("error on getFileres"+error);
      
    })
  }


  onSubmit(){

    const newFiliere :Filiere={
      nomFiliere:this.nomFiliere,
      
    }

    this.filiereService.addFiliere(newFiliere).subscribe(
      response => {
        console.log('Filiere ajouté avec succès', response);
       this.toggleFormulaire();
       this.getFilieres();
        
      },
      error => {
        console.error('Erreur lors de l\'ajout de Filiere', error);
       
      }
    )
  }

  getCountModuleByFiliere(){

    this.filiereService.getCountModulesByFiliere().subscribe(
      (data:any)=>{

        this.moduleFiliereCount =data.map((item:any) => ({
          nomFiliere: item[0],
          count: item[1]
        }));;
        console.log("count module by filiere work",this.moduleFiliereCount);
        
      },(error)=>{
        console.log("error in module count ",error);
        
      }
      )
    
  }
}
