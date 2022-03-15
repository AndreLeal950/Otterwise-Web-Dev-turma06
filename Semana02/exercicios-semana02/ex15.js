/* 15 - Dado o array de objetos abaixo, faça um programa que calcule a média
aritmética dos estudantes e imprima no console os nomes dos estudantes
aprovados. A média de aprovação é 7.0.
Os valores de entrada serão:
Array de Objetos;
Exemplo de Entrada:
[
{nome: 'Marcos', notas: [10, 7, 2]},
{nome: 'Michele', notas: [10, 10, 10]},
{nome: 'Pedro', notas: [3, 10, 9]},
{nome: 'Andressa', notas: [6, 6, 8]},
{nome: 'Cristiana', notas: [7, 9, 2]}
] */

let arrayObjects = [
    {nome: 'Marcos', notas: [10, 7, 2]},
    {nome: 'Michele', notas: [10, 10, 10]},
    {nome: 'Pedro', notas: [3, 10, 9]},
    {nome: 'Andressa', notas: [6, 6, 8]},
    {nome: 'Cristiana', notas: [7, 9, 2]}
    ]
let nota = arrayObjects[1]
let soma = 0;
let media = 0;

for(let i=0; i < arrayObjects.length; i++){
    //primeiro passo para acessar as notas
        nota = arrayObjects[i].notas  
        for(let j=0; j < nota.length; j++){
        
        soma += nota[j] 
        media = (soma / 3).toFixed(2)
        
        } 
            if(media >= 7){
            console.log(`${[arrayObjects[i].nome]} - Média: ${media}`);
        }
      
        soma = 0;
    }  

