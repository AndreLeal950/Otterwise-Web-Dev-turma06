import { input } from "console-input";
import  axios from "axios";
import fs from "fs";


//const cepInput = () => input("Digite seu CEP:");

const infoCep = async (cep)  => {

const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
return (response.data);
}

let aleatory = []

    for (let i=0; i < 20; i++){
    
        aleatory.push(Math.floor (Math.random() * ( 29099999 - 29000000 ))+ 29000000);
    }
console.log(aleatory);

const cepInput =  aleatory.map((element, index, array) => element)
console.log(cepInput);

const cepReceive = aleatory.map(async (e) => {
    //console.log(infoCep(e))
    //console.log(await infoCep(e))
    //console.log(e)
    return await infoCep(e)
});
Promise.all(cepReceive).then(ceps => {console.log(ceps)});

console.log(cepReceive);

const saveToJSON = (data, fileName) => {

    const parsedJSON = JSON.stringify(data);

    fs.writeFileSync(fileName, parsedJSON);

};

const main = async () => {
 
const saveCepReceive = cepReceive;

const saveInfoCep = await infoCep();

saveToJSON (saveInfoCep, "Local.json")
}
main();