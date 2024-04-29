import { Component,Input,Output,EventEmitter} from '@angular/core';
import { DeleteServiceService } from './delete-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() usedComponant:any;
  afficheModal =false;

  
  constructor(private activeModal: NgbActiveModal,private deleteService:DeleteServiceService){}



  suprimme(): void {
    this.deleteService.result='delete'; 
    this.activeModal.close(); 
  }

  hide(){
    this.activeModal.close(); 
    this.deleteService.result=''; 
  }
}
