/* 12 - Dado um array de números, faça um programa que encontre o menor
elemento deste array e sua posição. Mostre as informações encontradas no
console.
Exemplo de Entrada:
[1,2,3,4,-5,6,7,8,9,10]
Exemplo de Saída:
Menor valor: -5
Posição: 4
 */

let arrayNumbers = [1,2,-3,3,-4,4,-5,6,7,8,9,10]
let menor = arrayNumbers[0];
let posicao = 0;

for(let i=0; i< arrayNumbers.length; i++){
    if(arrayNumbers[i] < menor){
        menor = arrayNumbers[i]
        posicao = i
    }
}
console.log(`Menor valor: ${menor}`);
console.log(`Posição: ${posicao}`);