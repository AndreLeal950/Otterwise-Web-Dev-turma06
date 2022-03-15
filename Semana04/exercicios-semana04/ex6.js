/* 6 - [REFATORAÇÃO] Dado um array de números como entrada, faça um
programa que multiplique todos os valores por 10.
OBS: Para melhorar a resolução desse problema, monte um programa que
recebe como parâmetro o valor pelo qual os valores do array devem ser
multiplicados.
Exemplo de Entrada:
[1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3] */

let numbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
let value = 20;

const newNumbers = numbers.map((element, index, array) => element * value);
console.log(newNumbers);