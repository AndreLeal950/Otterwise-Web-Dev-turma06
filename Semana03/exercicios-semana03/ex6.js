/* 6 - [REFATORAÇÃO] Dado um array de números como entrada, faça um
programa que multiplique todos os valores por 10.
OBS: Para melhorar a resolução desse problema, monte um programa que
recebe como parâmetro o valor pelo qual os valores do array devem ser
multiplicados.
Exemplo de Entrada:
[1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3] */

let arrayNumbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
let value = 0;
const multNumbers = (value) => {
    for(let i = 0; i < arrayNumbers.length; i++){
        newNumber = arrayNumbers[i] * value
        console.log(newNumber);   
    }
  
}
multNumbers(20);