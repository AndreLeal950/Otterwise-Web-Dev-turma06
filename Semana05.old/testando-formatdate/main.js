/* 1. Utilizando o Yarn ou NPM, crie o arquivo package.json e configure seu projeto.
2. Adicione ao seu projeto o pacote date-fns.
3. Crie um arquivo formatters.js:
a. Nesse arquivo crie uma função chamada formatDate que recebe uma data como parâmetro e,
utilizando a date-fns, retorna essa data no formato “DD/MM/YYYY”.
b. Esse arquivo deve exportar a função formatDate.

Dica: para criar uma data com javascript utilize: new Date() */

import {formatDate} from "./formatters.js"

console.log(formatDate(new Date()));