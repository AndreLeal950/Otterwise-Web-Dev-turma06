/* 7 - Escreva um programa que tenha como entrada um valor. Este valor é a
quantidade de linhas de saída que serão apresentadas na execução do
programa.
Exemplo de Entrada:
7 */
 let value = 7;
 let soma = 0;

 for(let i=1; i <= value * 4; i++){
     if(i % 4 == 0){
         soma += "PIM"
         console.log(soma);
         soma = 0;   
     }else {
         soma = soma + i + " "
     }
 }