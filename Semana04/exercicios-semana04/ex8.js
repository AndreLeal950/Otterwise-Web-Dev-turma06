/* 8 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que tenha
como entrada um valor à ser pesquisado e retorne se o nome existe ou não no
array.
Exemplo de Entrada:
[‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’] */

const arraynames = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"];
let busca = 'Carla';

const name = arraynames.find((elem) => elem == busca);
if (name == busca)
  console.log(`O nome ${busca} foi encontrado no array`);
else console.log(`O nome ${busca} não foi encontrado no array`);
