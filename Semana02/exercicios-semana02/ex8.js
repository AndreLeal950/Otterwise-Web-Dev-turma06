/* 8 - Dado um array de números como entrada, faça um programa que
multiplique todos os valores por 10.
Exemplo de Entrada:
[1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
Exemplo de Saída:
[10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30] */

let arrayNumbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
for(let i=0; i < arrayNumbers.length; i++){
    newArray = arrayNumbers[i] * 10
    console.log(newArray)
}