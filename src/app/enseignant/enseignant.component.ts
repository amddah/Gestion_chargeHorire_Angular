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
  emailDisabled: boolean = false;
  
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
    this.email = ''; 
    this.nom = ''; 
    this.prenom = ''; 
    this.emailDisabled = false;
  }

 
  
  update(enseignant: any) {
    this.afficherFormulaire=true;
    this.emailDisabled =true;
    // Remplissez le formulaire avec les données de l'enseignant sélectionné
     this.email =enseignant.email;
     this.nom = enseignant.nom;
     this.prenom = enseignant.prenom;
  }

  delete(email:string){
    this.deleteService.confirmDelete().then((confirmed) => {
      if (confirmed) {
        this.enseignantService.deleteEnseignant(email).subscribe(
          
          response => {
             window.location.reload();
            
          },
          error => {
            console.error('Erreur lors de supprission de l\'enseignant', error);
            
          }
        );
        
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

    if (!this.emailDisabled) {
      this.enseignantService.addEnseignant(newEnseignant).subscribe(
        response => {
          console.log('Enseignant ajouté avec succès', response);
         window.location.reload();
          
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'enseignant', error);
         
        }
      );
    } else {
      this.enseignantService.updateEnseignant(newEnseignant).subscribe(
        response => {
          console.log('Enseignant est modifie avec succès', response);
         window.location.reload();
          
        },
        error => {
          console.error('Erreur lors de modification de l\'enseignant', error);
         
        }
      )
      
    }
    
   
    
  }

}
