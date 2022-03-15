/* 18 - Escreva um programa que receba como entrada três números que serão
armazenados nas variáveis valueOne, valueTwo e valueThree respectivamente.
Tendo esses valores, mostre-os na tela na ordem em que estão armazenados.
Após ter mostrado faça trocas em que ao final valueTwo assuma o valor de
valueThree, valueThree assuma o valor de valueOne e valueOne assuma o valor
de valueTwo. Mostre ao final os valores atualizados. */

let valueOne = 15;
let valueTwo = 18;
let valueThree = 26;

console.log("Value One = "+ valueOne + " , " + "Value Two = "+ valueTwo + " , " + "Value Three = "+ valueThree);

let valueTemp = 15;
valueOne = valueTwo;
valueTwo = valueThree;
valueThree = valueTemp;

console.log("Value One = "+ valueOne + " , " + "Value Two = "+ valueTwo + " , " + "Value Three = "+ valueThree);