import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { ModuleComponent } from './module/module.component';
import { FiliereComponent } from './filiere/filiere.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { FiliereDetailComponent } from './filiere-detail/filiere-detail.component';



const routes: Routes = [
  {path:'enseignant',component:EnseignantComponent},
  {path:'module',component:ModuleComponent},
  {path:'filier',component:FiliereComponent},
  {path:'',component:DashbaordComponent},
  {path:'filiereDetail/:nomFiliere',component:FiliereDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
