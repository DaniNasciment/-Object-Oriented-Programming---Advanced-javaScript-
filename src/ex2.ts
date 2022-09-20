class ContaBancaria {
    public nomeUsuario: string;
    public cpf: number;
    public saldo: number; 

    constructor (nomeUsuario:string,cpf:number,saldo:number){
        this.nomeUsuario = nomeUsuario;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    public pagar (valor:number) {
        this.saldo -= valor;
    }
}
const contaB:ContaBancaria = new ContaBancaria ("Daniela Nascimento",324863465,100000000000);
contaB.pagar(5);

console.log(`Nome do usuario é ${contaB.nomeUsuario}, cpf ${contaB.cpf} e conta ${contaB.saldo}`);