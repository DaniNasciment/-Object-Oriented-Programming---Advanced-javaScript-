var Patinetes = /** @class */ (function () {
    function Patinetes(color, numRodas, size) {
        this.color = color;
        this.numRodas = numRodas;
        this.size = size;
    }
    Patinetes.prototype.MovimentaSe = function () {
        console.log("Esta em movimento");
    };
    return Patinetes;
}());
var patinete = new Patinetes("rosa", 3, 35);
patinete.MovimentaSe();
console.log("A cor do patinete \u00E9 ".concat(patinete.color));
console.log("O numero de rodas do patinete \u00E9 ".concat(patinete.numRodas));
console.log("O tamanho do patinete \u00E9 ".concat(patinete.size));
