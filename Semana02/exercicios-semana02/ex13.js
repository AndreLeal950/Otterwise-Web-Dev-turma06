/* 13 - Dado o objeto à seguir, imprima no console:
O nome do dev.
O segundo projeto.
O nome do primeiro projeto.
Entrada:
{
name: "Juca",
projects: [
{ name: "Projeto 1", start: "01/02/2021" },
{name: "Projeto 2", start: "03/03/2021"}
]
} */

let object = {
    name: "André",
    projects: [
    {name: "Projeto 1", start: "01/02/2021" },
    {name: "Projeto 2", start: "03/03/2021"}
    ]
    };
    console.log(object.name);
    console.log(object.projects[1]);
    console.log(object.projects[0].name);