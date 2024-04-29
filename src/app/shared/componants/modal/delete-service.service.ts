import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {   ModalComponent} from "./modal.component";

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

 result :String ="";
 
  constructor(private modalService: NgbModal) {}

  // Méthode pour afficher le modal de confirmation de suppression
  confirmDelete(): Promise<boolean> {
    const modalRef = this.modalService.open(ModalComponent, { windowClass : "my-class",size:<any>'xl' });
    return modalRef.result.then((result) => {
      return this.result === 'delete'; // Retourne true si l'utilisateur a confirmé la suppression
    }).catch(() => {
    
      return false; // Retourne false si l'utilisateur a annulé
    });
  }
}
