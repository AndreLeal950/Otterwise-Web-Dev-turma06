/* 09 - Tendo como informações um nome e uma idade, faça um programa que
imprima no console se a pessoa é maior ou menor de idade.
Os valores de entrada serão:
Nome;
Idade.
Exemplo de Entrada:
Valter
23
-----------------
Juliana
12
Exemplo de Saída:
Valter é maior de idade.
-----------------
Juliana é menor de idade. */

let name = "Juliana"
let age = 16

if(age < 18){
    console.log(name + " é menor de idade")
}else if(age > 18){
    console.log(name + " é mior de idade")
}