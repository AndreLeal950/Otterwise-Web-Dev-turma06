/* 19 - Crie um algoritmo que tem como entrada um array de strings e trata essas
string substituindo os números por letra de acordo com a tabela a seguir, além
disso, deve remover os espaços em branco no começo e fim da string, se
existirem.
Tabela:
1 : i
3 : e
4 : a
5 : s
0 : o
Exemplo entrada:
[' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt '] */

let arrayName = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']

let troca = arrayName[0];

for(let i=0; i < arrayName.length; i++){
    troca = arrayName[i];
    let palavra = ''
    for(let index=0; index < troca.length; index++){
        palavra += troca[index]
        
        
        
    } console.log(palavra[i]);
    arrayName[i] = palavra
    
} 

