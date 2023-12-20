"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvenementSportif = void 0;
var EvenementSportif = /** @class */ (function () {
    function EvenementSportif(equipe1, equipe2) {
        this.equipe1 = equipe1;
        this.equipe2 = equipe2;
    }
    EvenementSportif.prototype.afficherEquipes = function () {
        return "Rencontre entre ".concat(this.equipe1, " et ").concat(this.equipe2);
    };
    EvenementSportif.prototype.getEquipe1 = function () {
        return this.equipe1;
    };
    EvenementSportif.prototype.getEquipe2 = function () {
        return this.equipe2;
    };
    EvenementSportif.prototype.setEquipe1 = function (equipe1) {
        this.equipe1 = equipe1;
    };
    EvenementSportif.prototype.setEquipe2 = function (equipe2) {
        this.equipe2 = equipe2;
    };
    return EvenementSportif;
}());
exports.EvenementSportif = EvenementSportif;
