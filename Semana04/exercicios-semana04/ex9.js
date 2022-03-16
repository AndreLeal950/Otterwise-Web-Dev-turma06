/* 9 - [REFATORAÇÃO] Dado a lista de compra a seguir, faça um programa que
imprime no console valor total. Atenção, o valor de cada item é unitário.
Exemplo de Entrada:
[
{ nome: 'maçã', quantidade: 2, valor: 0.5},
{ nome: 'alface', quantidade: 1, valor: 1.73},
{ nome: 'Água 5L', quantidade: 2, valor: 5.99},
{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]
Exemplo de Saída:
R$ 19.75 */

const list = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
    ];
   const value = list.map((element, index, Array) => {
     return list[index].quantidade * list[index].valor
   });

   const total = value.reduce((acumulador, number) => {
      return acumulador + Number(number);
    }, 0);

   //console.log(value);
   console.log(` R$ ${total}`);