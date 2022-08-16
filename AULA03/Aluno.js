export class Aluno {
    constructor(nome, idade, cidade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.notas = notas;
    }
    apresentar() {
        return `Oi! Meu nome é ${this.nome}`;
    }
    calcularMedia() {
        return this.notas.reduce((anterior, posterior) => posterior + anterior, 0) / this.notas.length;
    }
}
