import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  afficheModal =false;

  show() {
    this.afficheModal = true;
  }

  hide() {
    this.afficheModal = true;
  }
}
