import { Component ,ViewChild} from '@angular/core';
import { ModalComponent } from '../shared/componants/modal/modal.component';
import { EnseignantService } from './enseignant.service';
import { Enseignant } from './enseignant';


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})


export class EnseignantComponent {

  afficherFormulaire = false;

  enseignantSelectionne: any = {};

  enseignants :Enseignant[] =[];

  constructor(private enseignantService:EnseignantService){}
 

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
