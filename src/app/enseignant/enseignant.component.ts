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

  delete(enseignant:any){
    this.deleteService.confirmDelete().then((confirmed) => {
      if (confirmed) {
        console.log(" hhhh chofooni"+enseignant);
        
      }else{
        console.log("hhhhhhhhhhhhhhhhh"+confirmed);
        
      }
    });
    
  }

}
