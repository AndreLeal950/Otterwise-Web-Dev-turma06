/* 7 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
e imprime no console a média aritmética dessas notas.
OBS: Para melhorar a resolução desse problema, monte um programa que
retorna a média aritmética independente do tamanho do array.
Exemplo Entrada:
[6, 8, 7] */

let arrayNotas = [9, 8, 9, 5, 9]
let media = 0;
let nota = 0;

const mediaNotas = () =>{
  for(i=0; i < arrayNotas.length; i++){
      nota += arrayNotas[i]
      media = parseFloat(nota / arrayNotas.length).toFixed(1)
      
      
  }
  console.log(`A média entre as notas do array é: ${media}`);
}
mediaNotas();