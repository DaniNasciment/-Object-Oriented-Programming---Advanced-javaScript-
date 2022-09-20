class Paciente {
    public nomeP: string;
    public idadeP: number;
    public genero: string;

    constructor (nomeP:string, idadeP:number, genero:string) {
        this.nomeP = nomeP;
        this.idadeP = idadeP;
        this.genero = genero;
    }
    public reserva (){
        console.log("Pedido de reserva");
    }
}
const paciente:Paciente = new Paciente ("Roberto",35,"masculino");
paciente.reserva(); 

console.log(`Nome do paciente ${paciente.nomeP} idade ${paciente.idadeP} e genero ${paciente.genero}`);