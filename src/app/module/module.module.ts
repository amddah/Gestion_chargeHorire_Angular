import { Inject, NgModule } from '@angular/core';
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

  constructor(@Inject("intituleToken") intitule:string,@Inject("vHcoursToken") vHcours: BigInt,@Inject("vHTdToken") vHTd:BigInt,
  @Inject("vHTpToken") vHTp:BigInt,@Inject("evaluationToken") evaluation:BigInt) {
    
    this.intitule=intitule;

    this.vHcours=vHcours;

    this.vHTd=vHTd;

    this.vHTp=vHTp;

    this.evaluation=evaluation;
  }
  
}
