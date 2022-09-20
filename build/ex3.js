var Paciente = /** @class */ (function () {
    function Paciente(nomeP, idadeP, genero) {
        this.nomeP = nomeP;
        this.idadeP = idadeP;
        this.genero = genero;
    }
    Paciente.prototype.reserva = function () {
        console.log("Pedido de reserva");
    };
    return Paciente;
}());
var paciente = new Paciente("Roberto", 35, "masculino");
paciente.reserva();
console.log("Nome do paciente ".concat(paciente.nomeP, " idade ").concat(paciente.idadeP, " e genero ").concat(paciente.genero));
