/* 5 - [REFATORAÇÃO] Dado um array de números, faça um programa que imprima
na tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que também
imprimem os números negativos, os pares, os ímpares e realize a contagem de
cada um deles.
Os valores de entrada serão:
Array;
Exemplo de Entrada:
[1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127] */

let numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];
let contPos = 0
let contNeg = 0
let contPar = 0
let contImpar = 0


const getNumber = () =>{
    for(let i=0; i <= numbers.length; i++){
        if(numbers[i] > 0 ){
            contPos += 1;
            numbers > 0;
        } 
        else if(numbers[i] < 0 ){
            contNeg ++;
        }
        if(numbers[i] % 2 == 0 ){
            contPar ++;
        }
        else if(numbers[i] % 2 != 0 ){
            contImpar ++;
        }
        
    } 
    console.log(`${contPos} números positivos`);
    console.log(`${contNeg} números negativos`);
    console.log(`${contPar} números pares`);
    
}  
getNumber(numbers);

  

