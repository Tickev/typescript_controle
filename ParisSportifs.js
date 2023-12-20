"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParisSportif = void 0;
var EventSport_1 = require("./EventSport");
var ParisSportif = /** @class */ (function (_super) {
    __extends(ParisSportif, _super);
    function ParisSportif(montantMise, equipe1, equipe2, coteEquipe1, coteEquipe2) {
        var _this = _super.call(this, equipe1, equipe2) || this;
        _this.montantMise = montantMise;
        _this.coteEquipe1 = coteEquipe1;
        _this.coteEquipe2 = coteEquipe2;
        return _this;
    }
    ParisSportif.prototype.calculerGainPotentiel = function () {
        return this.montantMise * (this.coteEquipe1 > this.coteEquipe2 ? this.coteEquipe1 : this.coteEquipe2);
    };
    ParisSportif.prototype.afficherDetailsPari = function () {
        return "Montant de la mise : ".concat(this.montantMise, " euros Cote pour ").concat(this.getEquipe1(), " : ").concat(this.coteEquipe1, " Cote pour ").concat(this.getEquipe2(), " : ").concat(this.coteEquipe2, " Gain potentiel : ").concat(this.calculerGainPotentiel(), " euros");
    };
    return ParisSportif;
}(EventSport_1.EvenementSportif));
exports.ParisSportif = ParisSportif;
