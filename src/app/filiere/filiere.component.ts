import { Component } from '@angular/core';
import { FiliereService } from './filiere.service';
import { Filiere } from './filiere';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent {

  filieres :Filiere[] =[];
  nomFiliere:string='';

  afficherFormulaire =false;

  constructor(private filiereService:FiliereService){}

  ngOnInit(){
    this.getFilieres();
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
      nomFiliere:this.nomFiliere
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
}
