import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementsComponent } from '../form-elements/form-elements.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [FormElementsComponent],
  imports: [
    CommonModule,SharedModule
  ]
})
export class EnseignantModule { 
  email:string;

  nom:string;

  prenom:string;

  constructor(email: string, nom: string, prenom: string) {
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
  }

}
