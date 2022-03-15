/* 3 - Dado um array de nomes, faça um programa que imprima na tela todos os
nomes (na mesma linha).
Os valores de entrada serão:
Array;
Exemplo de Entrada:
['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
Exemplo de Saída:
Angela, Rosa, Ticiana, Carla, Renata */

let arrayName = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'];
let result = '';

for(let i=0; i <arrayName.length; i++){
    if(arrayName.length -1 == i){
        result += arrayName[i]
    }else{
        result += arrayName[i] + ', '
    }  
    
}
console.log(result); 

