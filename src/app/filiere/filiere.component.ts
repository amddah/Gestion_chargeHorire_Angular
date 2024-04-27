import { Component } from '@angular/core';
import { FiliereService } from './filiere.service';
import { Filiere } from './filiere';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent {

  filieres :Filiere[] =[];
  constructor(private filiereService:FiliereService){}

  ngOnInit(){
    this.getFilieres();
  }

  getFilieres(){
    this.filiereService.getFilieres().subscribe((data:Filiere[])=>{
      this.filieres =data;
      console.log("get filiers Ok!"+this.filieres);
      
    },(error)=>{
      console.log("error on getFileres"+error);
      
    })
  }


}
