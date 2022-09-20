class Patinetes {
    public color: string;
    public numRodas: number;
    public size: number; 

    public MovimentaSe () {
        console.log("Esta em movimento");
    }

    constructor (color:string, numRodas:number, size:number){
        this.color=color;
        this.numRodas = numRodas;
        this.size = size;
    }

}
const patinete= new Patinetes("rosa", 3, 35);
patinete.MovimentaSe()

console.log(`A cor do patinete é ${patinete.color}`);
console.log(`O numero de rodas do patinete é ${patinete.numRodas}`);
console.log(`O tamanho do patinete é ${patinete.size}`);


