import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModuleModule { 

  intitule:string

  vHcours :BigInt

  vHTd:BigInt

  vHTp: BigInt

  evaluation:BigInt

  constructor(intitule:string,vHcours: BigInt,vHTd:BigInt,vHTp:BigInt,evaluation:BigInt) {
    
    this.intitule=intitule;

    this.vHcours=vHcours;

    this.vHTd=vHTd;

    this.vHTp=vHTp;

    this.evaluation=evaluation;
  }
  
}
