import { Pessoa } from './Pessoa.js';
export class Diretor extends Pessoa {
    constructor(nome, idade, cidade, professores) {
        super(nome, idade, cidade);
        this.professores = professores;
    }
    apresentar() {
        return `Oi! me chamo ${this.nome} e sou o Diretor desta escola, tenho ${this.idade} anos e moro em ${this.cidade}`;
    }
    relatorioDesempenho() {
    }
}
