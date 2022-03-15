/* 19 - Crie uma função chamada checkSignal que possui um parâmetro e imprime
no console:
"x é positivo" se o número for positivo;
"x é negativo" se o número for negativo.
x deve ser substituído pelo número passado como argumento. */

function chekSignal(x){
    if( x >= 0){
        console.log(x + " é positivo")
    }else{
        console.log(x + " é negativo")

    }
}chekSignal(0);