import { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css'



function Form() {

    const [data, setData] = useState('');
    const [cep, setCep] = useState('');

    useEffect(() => {
        const request = async () => {
            try {
                if (cep.length === 8) {
                    const response = await axios.get(
                        `https://viacep.com.br/ws/${cep}/json/`);
                    console.log(response.data);
                    setData(response.data)
                    if (response.data.erro === "true") {
                        alert("CEP INVÁLIDO")
                    }
                } else if (cep.length > 8) {
                    alert('DIGITE O NÚMERO CORRETAMENTE')
                }
            } catch (error) {
                console.log('Deu Error')
            }
        }
        request();
    }, [cep])
    return (
        <form className="form">
            <label >CEP: <br></br>
                <input type="number" name="cep" maxLength='8' onChange={(event) => {
                    setCep(event.target.value);
                }} />
            </label>

            <label >Endereço:<br></br>
                <input type="text" name="street" defaultValue={data.logradouro ? data.logradouro : ''} />
            </label>
            <label >Estado:<br></br>
                <input type="text" name="state" defaultValue={data.uf ? data.uf : ''} />
            </label>

            <label >Cidade: <br></br>
                <input type="text" name="city" defaultValue={data.localidade ? data.localidade : ''} />
            </label>

            <label>Bairro:<br></br>
                <input type="text" name="neighborhood" defaultValue={data.bairro ? data.bairro : ''} />
            </label>
        </form>
    )};
export default Form;