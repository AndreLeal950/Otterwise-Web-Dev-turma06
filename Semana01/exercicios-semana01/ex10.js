/* 10 - Tendo como informação dois números, faça um programa que imprima na
tela qual deles é o MAIOR e qual deles é o menor. Caso os números sejam
iguais, informe que eles são iguais.
Os valores de entrada serão:
Número 1;
Número 2;
Exemplo de Entrada:
2
5
-----------------
7
7
Exemplo de Saída:
5 é maior que 2
-----------------
7 é igual a 7 */

let numberOne = 24
let numberTwo = 14

if(numberOne > numberTwo){
    console.log("condição 1: " +numberOne + " é maior que " + numberTwo)
}else if(numberOne < numberTwo){

    console.log("condição 2: " + numberOne + " é menor que " + numberTwo)
}else if(numberOne === numberTwo){
    console.log("condição 3: " + numberOne + " é igual ao número " + numberTwo)
}
