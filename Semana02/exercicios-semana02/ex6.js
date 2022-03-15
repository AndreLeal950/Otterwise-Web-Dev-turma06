/* 6 - Dado um array de números, mostre quantos valores são pares, quantos são
ímpares, quantos são positivos e quantos são negativos.
Exemplo de Entrada:
[-5,0,-3,-4,12] */

let arrayNumbers = [-5, 0, -3, -4, 12]
let contPar = 0
let contImpar = 0
let contPos = 0
let contNeg = 0


for(let i= 0; i < arrayNumbers.length; i++){
    if(arrayNumbers[i] % 2 === 0){
        contPar += 1;
        
    } else if(arrayNumbers[i] % 2 != 0){
        contImpar += 1;
    } 
    if(arrayNumbers[i] > 0){
        contPos += 1;
    } else if(arrayNumbers[i] < 0){
        contNeg += 1;
    }
}
console.log(contPar + " valor(es) par(es)");
console.log(contImpar + " valor(es) impar(es)");
console.log(contPos + " valor(es) positivo(s)");
console.log(contNeg + " valor(es) negativo(s)");