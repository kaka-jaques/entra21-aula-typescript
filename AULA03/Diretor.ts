import { Professor } from './Professor.js'
import { Pessoa } from './Pessoa.js'

export class Diretor extends Pessoa{

    public nome:string
    public idade:number
    public cidade:string
    public professores:Array<Professor>

    constructor(nome:string, idade:number, cidade:string, professores:Array<Professor>){

        super(nome, idade, cidade)
        this.professores = professores

    }

    apresentar():string{

        return `Oi! me chamo ${this.nome} e sou o Diretor desta escola, tenho ${this.idade} anos e moro em ${this.cidade}`

    }

    relatorioDesempenho(){



    }

}

