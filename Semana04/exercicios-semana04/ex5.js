/* 5 - Escreva um programa para substituir os elementos pares pelo valor “X”.
Exemplo de Entrada:
[1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127] */

let arrayNumbers = [1, 12, -23, 22, -19, 13, 10, -8, 52, -153, -127]


arrayNumbers.forEach((number, index) => {
    if(number % 2 == 0 ){
      arrayNumbers[index] = "X"
  }
});
console.log(arrayNumbers);
    