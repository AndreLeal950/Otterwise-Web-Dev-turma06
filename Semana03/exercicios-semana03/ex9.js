/* 9 - [REFATORAÇÃO] Dado a lista de compras a seguir, faça um programa que
imprime no console o valor total. Atenção, o valor de cada item é unitário.
Exemplo de Entrada:
[
{ nome: 'maçã', quantidade: 2, valor: 0.5},
{ nome: 'alface', quantidade: 1, valor: 1.73},
{ nome: 'Água 5L', quantidade: 2, valor: 5.99},
{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]
Exemplo de Saída:
R$ 19.75 */

let arrayObject = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
    ]
let maca = 0;
let alface = 0;
let agua = 0;
let pao = 0;
let soma = 0;
const calcValue = () => {

    for(let i=0; i < arrayObject.length; i++){
        maca = arrayObject[0].quantidade * arrayObject[0].valor;
        alface = arrayObject[1].quantidade * arrayObject[1].valor;
        agua = arrayObject[2].quantidade * arrayObject[2].valor;
        pao = arrayObject[3].quantidade * arrayObject[3].valor;
        soma = maca + alface + agua + pao;       
    }

}
calcValue();
console.log(`R$ ${soma}`);