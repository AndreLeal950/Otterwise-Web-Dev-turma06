/* 3 - [REFATORAÇÃO] Dado um array de números, faça um programa que
imprima na tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que também
imprima os números negativos, os pares, os ímpares e realize a contagem de
cada um deles.
Os valores de entrada serão:
Array;
Exemplo de Entrada:
[1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127] */

const arrayNymbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const positiv = arrayNymbers.filter((element) => element > 0);
const negativ = arrayNymbers.filter((element) => element < 0);
const pairs = arrayNymbers.filter((element) => element % 2 == 0);
const impairs = arrayNymbers.filter((element) => element % 2 != 0);


console.log(`Os números positivos são: ${positiv}`);
console.log(`Os números negativos são: ${negativ}`);
console.log(`Os números pares são: ${pairs}`);
console.log(`Os números impares são: ${impairs}`);

