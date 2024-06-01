import { Intervention } from "./intervention";

export interface EnseignantIntervention extends Intervention {

    nom:string;
    prenom:string;
    module:string;
    
}
