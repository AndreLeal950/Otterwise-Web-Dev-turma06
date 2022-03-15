/* 8 - [REFATORAÇÃO] Dado um array de números, faça um programa que encontre
o menor elemento deste array e sua posição. Mostre as informações
encontradas no console.
OBS: Para melhorar a resolução desse problema, monte um programa que
também consegue retornar qual o maior valor e qual a sua posição.
Exemplo de Entrada:
[1,2,3,4,-5,6,7,8,9,10]
Exemplo de Saída:
Menor valor: -5
Posição: 4 */

let arrayNumbers = [1,2,3,4,-5,6,7,8,9,10]
let maior = arrayNumbers[0];
let menor = arrayNumbers[0];
let posicao1 = 0;
let posicao2 = 0;

const comparateNumber = (value) =>{
    for(let i=0; i <= arrayNumbers.length; i++){    
        
        if(arrayNumbers[i] > maior){
            maior = arrayNumbers[i];
            posicao1 = i;
        } if(arrayNumbers[i] < menor){
            menor = arrayNumbers[i];
            posicao2 = i;

        }
    }
}
comparateNumber(0)
console.log(`Maior valor: ${maior} - Posição: ${posicao1}`);
console.log(`Menor valor : ${menor} - Posição: ${posicao2}`)