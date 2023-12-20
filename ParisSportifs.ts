import {EvenementSportif} from './EventSport';

export class ParisSportif extends EvenementSportif {
    private montantMise: number;
    private coteEquipe1: number;
    private coteEquipe2: number;

    constructor(montantMise: number, equipe1: string, equipe2: string, coteEquipe1: number, coteEquipe2: number) {
    super(equipe1, equipe2);
    this.montantMise = montantMise;
    this.coteEquipe1 = coteEquipe1;
    this.coteEquipe2 = coteEquipe2;
    }

    public calculerGainPotentiel(): number {
    return this.montantMise * (this.coteEquipe1 > this.coteEquipe2 ? this.coteEquipe1 : this.coteEquipe2);
    }

    public afficherDetailsPari(): string {
    return `Montant de la mise : ${this.montantMise} euros Cote pour ${this.getEquipe1()} : ${this.coteEquipe1} Cote pour ${this.getEquipe2()} : ${this.coteEquipe2} Gain potentiel : ${this.calculerGainPotentiel()} euros`;
    }
}
