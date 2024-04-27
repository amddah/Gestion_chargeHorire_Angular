import { NgModule ,Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,SharedModule
  ]
})
export class EnseignantModule { 
  email:string;

  nom:string;

  prenom:string;

  constructor(@Inject('EmailToken') email: string, @Inject('NomToken') nom: string, @Inject('PrenomToken') prenom: string) {
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
  }

}
