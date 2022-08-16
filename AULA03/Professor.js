import { Pessoa } from './Pessoa.js';
export class Professor extends Pessoa {
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }
    apresentar() {
        return `Oi! me chamo ${this.nome} e sou o Professor desta turma, tenho ${this.idade} anos e moro em ${this.cidade}`;
    }
    geraBoletins() {
        let boletins = [];
        this.alunos.forEach(Aluno => {
            boletins.push(Aluno.calcularMedia());
        });
        return boletins;
    }
}
