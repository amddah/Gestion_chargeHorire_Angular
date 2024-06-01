import { Component } from '@angular/core';
import { FiliereService } from "../filiere/filiere.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filiere-detail',
  templateUrl: './filiere-detail.component.html',
  styleUrls: ['./filiere-detail.component.css']
})
export class FiliereDetailComponent {

  nomFiliere :string ='';
  modules:string[]=[];
  constructor(private filiereService:FiliereService,private route: ActivatedRoute){}

  ngOnInit(){

    this.route.params.subscribe(params => {
      this.nomFiliere = params['nomFiliere'];

    });
    this.getModuleByFiliere(this.nomFiliere);

    console.log(this.nomFiliere);
    
  }

  getModuleByFiliere(nomFiliere:string){

    this.filiereService.getModuleByFiliere(nomFiliere).subscribe(
      (data:string[])=>{
        this.modules=data;
        console.log("get module ",data);
        
      },(error)=>{
        console.log("error get module",error);
        
      }
    );
  }

}
