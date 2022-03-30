import {mostra} from "./helpers.js";
import  fs  from "fs"

 

const user = {
    firstName : "Andre",
     lastName : "Leal",
    age : "48",
    email : "lealbelem@yahoo.com.br"
};

mostra(user);


const saveToJSON = (data, fileName) => {

    const parsedJSON = JSON.stringify(data);

    fs.writeFileSync(fileName, parsedJSON);

};
saveToJSON(user, "dados.JSON" );

