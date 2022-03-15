/* 11 - Dado um array de nomes, faça um programa que tenha como entrada um
valor a ser pesquisado e retorne se o nome existe ou não no array.
Exemplo de Entrada:
[‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
‘Carla’
Exemplo de Saída:
O nome Carla existe no Array.
 */

let names = ['Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla'];


function pesquisa(Name){
    for(let i=0; i < names.length; i++){
        if(Name == names[i]){
        return `O nome ${Name} existe no array.`
        }

    }
        return `O nome ${Name} não existe no array.`

}

 console.log(pesquisa('Andre'));