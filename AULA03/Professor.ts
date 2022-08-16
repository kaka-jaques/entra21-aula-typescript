import { Aluno } from './Aluno.js'
import { Pessoa } from './Pessoa.js'

export class Professor extends Pessoa{

    public nome:string
    public idade:number
    public cidade:string
    public alunos:Array<Aluno>

    constructor(nome:string, idade:number, cidade:string, alunos:Array<Aluno>){
        
        super(nome, idade, cidade)
        this.alunos = alunos

    }

    apresentar():string{

        return `Oi! me chamo ${this.nome} e sou o Professor desta turma, tenho ${this.idade} anos e moro em ${this.cidade}`

    }

    geraBoletins():Array<number>{

        let boletins:Array<number> = []

        this.alunos.forEach(Aluno => {
            boletins.push(Aluno.calcularMedia())
        });

        return boletins

    }

}