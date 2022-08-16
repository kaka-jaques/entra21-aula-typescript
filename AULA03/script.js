import { Aluno } from "./Aluno.js";
import { Diretor } from "./Diretor.js";
import { Professor } from "./Professor.js";
let fulano = new Aluno("Kalil", 21, "Brusque", [10, 7, 5]);
let ciclano = new Aluno("Naine", 22, "Brusque", [10, 9, 10]);
console.log(fulano.nome, fulano.idade, fulano.cidade);
console.log(fulano.apresentar());
console.log(fulano.calcularMedia());
console.log(ciclano.apresentar());
console.log(ciclano.calcularMedia());
let professor = new Professor('Oliota', 33, 'Blumenau', [fulano, ciclano]);
let diretor = new Diretor('Tamio', 40, 'Blumenau', [professor]);
