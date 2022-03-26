/* Ex.1: Crie um arquivo chamado helpers.js 
e nele crie uma função que multiplique 2 
números qualquer. Faça o export dessa função e em outro arquivo 
chamado index.js importe a função e a execute. */
import {multi, mostra} from "../helpers.js";


mostra(multi(5, 5));