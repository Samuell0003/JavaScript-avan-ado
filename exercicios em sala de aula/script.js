//  Seguem os enunciados das atividades avaliativas da aula de hoje (08/03/23):

// 1) Construa uma função em JavaScript para exibir apenas o primeiro e o último nome de cada uma das várias pessoas armazenadas em um vetor.
// Sugestão de vetor: let nomes = ["Wilton de Paula Filho", "Maria Jose da Silva", "Ana Maria"];
// Ex. de chamada da função: console.log(getFirstLastNames(nomes)); // ["Wilton Filho", "Maria Jose", "Ana Maria"]
// 2) Construa uma função em JavaScript para somar os valores ímpares de determinado vetor.
// Sugestões de vetores: 
// let vetor1 = [10, 4, 8, 7, 1, 20];
// let vetor2 = [0, 41, 13, 7, 1, 20];
// let vetor3 = [21, 33, 43, 19, 87];
// Chamadas da função:
// console.log(somarImpares(vetor1)); // 8
// console.log(somarImpares(vetor2)); // 62
// console.log(somarImpares(vetor3)); // 203
// Bom trabalho. 

let nomes = ["Wilton de Paula Filho", "Maria Jose da Silva", "Ana Maria"];
// 1
nomeSobrenome = (nome) =>
  nome.map((e) => {
    nome = e.split(" ");
    return nome[0] + " " + nome[nome.length - 1];
  });

console.log(nomeSobrenome(nomes));

let vetor1 = [10, 4, 8, 7, 1, 20];
let vetor2 = [0, 41, 13, 7, 1, 20];
let vetor3 = [21, 33, 43, 19, 87];
//2
impares = (vet) => vet.filter((e) => e % 2 != 0).reduce((soma, e) => e + soma);

console.log(impares(vetor1));
console.log(impares(vetor2));
console.log(impares(vetor3));
