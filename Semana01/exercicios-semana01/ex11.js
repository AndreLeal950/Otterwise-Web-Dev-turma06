/* 11 - Tendo como informação os três lados de um triângulo faça um programa
que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
OBS: Triângulo Equilátero → Possui os 3 lados iguais;
Triângulo Isósceles → Possui 2 lados iguais;
Triângulo Escaleno → Possui 3 lados diferentes.

Os valores de entrada serão:
Lado 1;
Lado 2;
Lado 3.
Exemplo de Entrada:
10
5
10
-----------------
2
1
5
Exemplo de Saída:
Triângulo Isósceles
-----------------
Triângulo Escaleno */

let sideOne = 35
let sideTwo = 25
let sideTree = 45

    if(sideOne === sideTwo && sideTree === sideOne){
 console.log("Tem três lados iguais, é um triângulo Equilátero")
}else if(sideOne === sideTwo || sideOne === sideTree || sideTwo === sideTree){
    console.log("Tem dois lados iguais, é um triângulo Isósceles")
}else {
    console.log("Tem três lados diferentes, é um triângulo Escaleno")
}