// 1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. 
// Dica: uma das faixas de CEP válidas vai de 29000000 a 29099999. 
// Use essa informação para gerar os CEP’s dentro dessa faixa.

// 2. Crie um programa que recebe uma lista de CEP’s e gera um arquivo JSON contendo as informações de logradouro, bairro, localidade, uf e o CEP consultado para cada um dos CEP’s válidos.
// Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api.
// Dica.1: Como gerar números dentro de uma faixa específica de valores. 
// Dica.2: Promise.all() 


import  axios from "axios";
import fs from "fs";
import { input } from "console-input";

//const cepInput = () => input("Digite um CEP:");

const searchCep = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

let aleatory = []

    for (let i=0; i < 20; i++){
    
        aleatory.push(Math.floor (Math.random() * ( 29099999 - 29000000 ))+ 29000000);
    }
console.log(aleatory);

const saveToJSON = (data, fileName) => {
  const parsedJSON = JSON.stringify(data);
  fs.writeFileSync(fileName, parsedJSON);
};

const main = async () => {
  try {
    const cep = aleatory;
    const cepRetornado = await searchCep(cep);
    saveToJSON(cepRetornado, "cep.json");
  } catch (error) {
    console.log(error.message);
  }
};

main();

// const cepReceive = aleatory.map(async (e) => {
//          infoCep(e)
//          console.log(await infoCep(e))
//          //console.log(e)
//          return await infoCep(e)
// });
// // //console.log(cepReceive);
//  Promise.all(aleatory).then(ceps =>{console.log(ceps)});


// const saveToJSON = (data, fileName) => {

//     const parsedJSON = JSON.stringify(data);
    
//     fs.writeFileSync(fileName, parsedJSON);
    
//     };
//     saveToJSON();



// const main = async () => {
 
// //const saveCepReceive = cepReceive();

// const saveInfoCep = await infoCep(cepReceive);

// saveToJSON (saveInfoCep, "Local.json")
// }
// main();