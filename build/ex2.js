var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nomeUsuario, cpf, saldo) {
        this.nomeUsuario = nomeUsuario;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.pagar = function (valor) {
        this.saldo -= valor;
    };
    return ContaBancaria;
}());
var contaB = new ContaBancaria("Daniela Nascimento", 324863465, 100000000000);
contaB.pagar(5);
console.log("Nome do usuario \u00E9 ".concat(contaB.nomeUsuario, ", cpf ").concat(contaB.cpf, " e conta ").concat(contaB.saldo));
