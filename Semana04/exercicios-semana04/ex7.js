/* 7 - Dado um array de entrada com o nome e as notas de avaliações dos alunos,
retorne uma lista com os alunos que tiraram 0 em todas as provas.
Exemplo de Entrada:
[
{nome: ,
notas: [ ]
] */

const list = [
    {nome: "Andre", notas: [7, 8, 6]},
    {nome: "Marcos", notas: [0, 0, 0]},
    {nome: "Claudia", notas: [5, 8, 9]},
    {nome: "Paulo", notas: [0, 0, 0]},
    {nome: "Thais", notas: [7, 8, 10]},
    {nome: "Luis", notas: [0, 0, 0]},
    {nome: "Eva", notas: [6, 7, 8]}
];

const newList = list.filter((list) => (list.notas[0] == 0 ));
 console.log(newList);