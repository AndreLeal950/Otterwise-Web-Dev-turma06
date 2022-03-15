/* 4 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
e imprime no console a média aritmética dessas notas.
OBS: Para melhorar a resolução desse problema, monte um programa que
retorna a média aritmética independente do tamanho do array.
Exemplo Entrada:
[6, 8, 7] */

const notas = [6, 8, 7]

const sum = notas.reduce((cont, number) => {
    
    return cont + Number(number) / 3;
},0);

console.log(`A média entre os números: ${notas} é igual a: ${sum}`);