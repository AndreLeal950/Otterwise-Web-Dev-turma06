/* 2 - Dado um array de números, faça um programa que teste se este array
contém um valor específico. Tanto o valor quanto o array serão valores de
entrada.
Exemplo de Entrada:
[1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
9
Exemplo de Saída:
O valor foi encontrado no Array */

let arrayNumbers = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127];
let busca = -1168;
const number = arrayNumbers.find((elem) => elem === busca);
if (number === 0)
  console.log(`O Elemento ${number} foi encontrado no array`);
else console.log(`O Elemento ${number} não foi encontrado no array`);
