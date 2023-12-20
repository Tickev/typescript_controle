export class EvenementSportif {
    private equipe1: string;
    private equipe2: string;

constructor(equipe1: string, equipe2: string) {
    this.equipe1 = equipe1;
    this.equipe2 = equipe2;
}

    public afficherEquipes(){
        return `Rencontre entre ${this.equipe1} et ${this.equipe2}`;
    }

    public getEquipe1(): string {
        return this.equipe1;
    }

    public getEquipe2(): string {
        return this.equipe2;
    }

    public setEquipe1(equipe1: string): void {
        this.equipe1 = equipe1;
    }
    
    public setEquipe2(equipe2: string): void {
        this.equipe2 = equipe2;
    }
}
