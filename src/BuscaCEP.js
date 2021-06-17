import React, {useState} from 'react';

export default function Pesquisa(){
  
    const[rua, setRua] = useState('')
    const[cidade, setCidade] = useState('')
    const[bairro, setBairro] = useState('')
    const[estado, setEstado] = useState('')
    const[cep, setcep] = useState('')
    const[cepDate, setCepDate] = useState('')

    const getCep = (event) => {
        setcep(event.target.value)
    }
    const consultar = async () =>{
        let url = 'https://cep.awesomeapi.com.br/json/'+cep
        let result = await fetch(url)
        let dados = await result.json()
        setRua(dados.address_name)
        setCidade(dados.city)
        setBairro(dados.district)
        setEstado(dados.state)
        setCepDate(dados.cep)
    }
    return( 
        <div className="sup">
            <div className="card">
                <label>Digite o CEP:
                <input  type="text" placeholder="Somente os números" onChange={getCep} /></label>
                <button onClick={consultar}>Consultar</button>
            </div>
            <div className="addr">
                <p>Rua: {rua}</p>
                <p>Bairro: {bairro}</p>
                <p>Cidade: {cidade}</p>
                <p>Cep: {cepDate}</p> 
            </div>
        </div>
       
            
      
    );
}
