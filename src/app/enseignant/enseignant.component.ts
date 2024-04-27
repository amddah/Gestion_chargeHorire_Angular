import { Component ,ViewChild} from '@angular/core';
import { ModalComponent } from '../shared/componants/modal/modal.component';


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})


export class EnseignantComponent {
 
  afficherFormulaire = false;

  
  enseignants = [
    { email: 'abdo@gmail.com', nom: 'Abdo', prenom: 'Ahmed' },
    { email: 'sarah@hotmail.com', nom: 'Sarah', prenom: 'Dupont' },
    { email: 'sarah@hotmail.com', nom: 'Sarah', prenom: 'Dupont' }
    
  ];

  enseignantSelectionne: any = {};

  @ViewChild(ModalComponent,{ static: true }) modalComponent!: ModalComponent;

  
  afficherModal() {
    this.modalComponent.show();
  }
  

  toggleFormulaire() {
    this.afficherFormulaire = !this.afficherFormulaire;
  }

  
  
  update(enseignant: any) {
    this.afficherFormulaire=true;
    // Remplissez le formulaire avec les données de l'enseignant sélectionné
    this.enseignantSelectionne = enseignant ;
  }

  delete(enseignant:any){
    console.log("delete:"+ enseignant);
    
  }

}
