/* 4 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um número e
imprime a sua tabuada do 1 ao 10.
OBS: Para melhorar a resolução desse problema, monte um código que aceite
um segundo valor e irá imprimir a tabuada de 1 até esse valor.
5 */


let valueOne = 0;
let valueTwo = 0;
let result = 0;

const calculate = (valueOne, valueTwo) => {
    for(let i=1; i <= valueTwo; i++){
        result = valueOne * i 
        console.log(`${valueOne} X ${i} = ${result}`);
   }
   
} 

calculate(5, 25);
