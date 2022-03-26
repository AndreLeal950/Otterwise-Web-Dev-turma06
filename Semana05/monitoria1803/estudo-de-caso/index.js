import { input } from "console-input";
import  axios from "axios";
import fs from "fs";


const cepInput = () => input("Digite seu CEP:");

const infoCep = async (cep)  => {

const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
return (response.data);
}


const saveToJSON = (data, fileName) => {

    const parsedJSON = JSON.stringify(data);

    fs.writeFileSync(fileName, parsedJSON);

};

const main = async () => {
 
const saveCepInput = cepInput();

const saveInfoCep = await infoCep(saveCepInput);

saveToJSON (saveInfoCep, "Local.json")
}
main();