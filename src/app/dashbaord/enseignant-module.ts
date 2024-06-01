export interface EnseignantModule {
    emailEnseignant: string;
    nomEnseignant: string;
    prenomEnseignant: string;
    modulesIntervention: { intituleModule: string, totalIntervention: number }[];
}
