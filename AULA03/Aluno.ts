

export class Aluno{

    public nome:string
    public idade:number
    public cidade:string
    public notas:Array<number>

    constructor(nome:string, idade:number, cidade:string, notas:Array<number>){

        this.nome = nome
        this.idade = idade
        this.cidade = cidade
        this.notas = notas

    }

    apresentar():string{

        return `Oi! Meu nome é ${this.nome}`

    }

    calcularMedia():number{
        return this.notas.reduce((anterior,posterior)=>posterior+anterior,0) / this.notas.length
    }

}