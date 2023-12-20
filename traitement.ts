import {ParisSportif} from './ParisSportifs';

let pari1 = new ParisSportif(50, "PSG", "Metz", 1.2, 4.5);
let pari2 = new ParisSportif(100, "Nantes", "Toulouse", 2.2, 2.8);


console.log(pari1.afficherDetailsPari());
console.log(pari2.afficherDetailsPari());

pari2.setEquipe1("Moscou");
console.log(pari2.afficherDetailsPari());
console.log(pari1.calculerGainPotentiel());
