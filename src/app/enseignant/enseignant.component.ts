import { Component ,ViewChild} from '@angular/core';
import { ModalComponent } from '../shared/componants/modal/modal.component';
import { EnseignantService } from './enseignant.service';
import { Enseignant } from './enseignant';
import { DeleteServiceService } from '../shared/componants/modal/delete-service.service';


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})


export class EnseignantComponent {


  title :string ="EnseignantComponent";
  afficherFormulaire = false;

  email:string ='';

  nom:string ='';

  prenom:string ='';

  enseignantSelectionne: any = {};

  enseignants :Enseignant[] =[];

  constructor(private enseignantService:EnseignantService,private deleteService: DeleteServiceService){}
 

ngOnInit(){
  this.getEnseignants();

}

getEnseignants(){
  this.enseignantService.getEnseignants().subscribe((datas : Enseignant[])=>{
    this.enseignants =datas

    console.log(this.enseignants);
   
  },(error)=>{
    console.log("error lors "+error);
  }

)
}

  

  @ViewChild(ModalComponent,{ static: true }) modalComponent!: ModalComponent;

  
 
  

  toggleFormulaire() {
    this.afficherFormulaire = !this.afficherFormulaire;
  }

 
  
  update(enseignant: any) {
    this.afficherFormulaire=true;
    // Remplissez le formulaire avec les données de l'enseignant sélectionné
    this.enseignantSelectionne = enseignant ;
  }

  delete(email:string){
    this.deleteService.confirmDelete().then((confirmed) => {
      if (confirmed) {
        this.enseignantService.deleteEnseignant(email).subscribe(
          
          response => {
            if (response && response === 'done') {
              // Suppression réussie, actualiser la page ou faire d'autres actions nécessaires
              window.location.reload();
            } else {
              // La réponse du serveur n'est pas conforme aux attentes, afficher un message d'erreur
              console.error('La réponse du serveur n\'est pas conforme :', response);
            }
            
          },
          error => {
            console.error('Erreur lors de supprission de l\'enseignant', error);
            window.location.reload();
           
          }
        );
        console.log(" deleted "+email);
        
      }else{
        console.log("error"+confirmed);
        
      }
    });
    
  }

  onSubmit() {
    const newEnseignant: Enseignant = {
      email: this.email,
      nom: this.nom,
      prenom: this.prenom
    };

    this.enseignantService.addEnseignant(newEnseignant).subscribe(
      response => {
        console.log('Enseignant ajouté avec succès', response);
        this.getEnseignants();
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'enseignant', error);
       // window.location.reload();
      }
    );
   
    
  }

}
