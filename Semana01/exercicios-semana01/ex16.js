/* 16 - Escreva um programa que receba como entrada dois valores. Após, o
programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
indicando se os valores recebidos como entrada são múltiplos entre si. */

let valueOne = 36;
let valueTwo = 13;
if(valueOne % valueTwo === 0 || valueTwo % valueOne === 0 ){
    console.log("São Multiplos")
}else (
    console.log("Não são Multiplos")
)