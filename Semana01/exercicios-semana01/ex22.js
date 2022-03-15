/* 22 - Pegue um valor de entrada e calcule o menor número de notas possíveis
(cédulas) no qual o valor pode ser decomposto. As notas consideradas são de
100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas
necessárias.
OBS: Você irá utilizar parseInt(), pesquise a respeito. */

const notas = [100, 50, 20, 10, 5, 2, 1];
let valor = 576;

console.log(valor)

for(let i=0; i < notas.length; i++){
    let qtdNotas = parseInt(valor / notas[i])
    console.log(qtdNotas + " nota (s) de R$ "+ notas[i] + ",00")
    valor = valor % notas[i];
}
/* let qtdNotas = parseInt(valor / 100);
console.log(qtdNotas + " nota (s) de R$ 100,00")
valor = valor % 100;

qtdNotas = parseInt(valor / 50);
console.log(qtdNotas + " nota (s) de R$ 50,00")
valor = valor % 50

qtdNotas = parseInt(valor / 20);
console.log(qtdNotas + " nota (s) de R$ 20,00")
valor = valor % 20

qtdNotas = parseInt(valor / 10);
console.log(qtdNotas + " nota (s) de R$ 10,00")
valor = valor % 10

qtdNotas = parseInt(valor / 5);
console.log(qtdNotas + " nota (s) de R$ 5,00")
valor = valor % 5

qtdNotas = parseInt(valor / 2);
console.log(qtdNotas + " nota (s) de R$ 2,00")
valor = valor % 2

qtdNotas = parseInt(valor / 1);
console.log(qtdNotas + " nota (s) de R$ 1,00")
valor = valor % 1
 */

