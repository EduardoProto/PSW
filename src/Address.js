import React from 'react';

class CardAddress extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            rua: '',
            bairro: '',
            cidade: '',
            estado: '',
            cep: ''
        }
    }

    render () {
        return (
            <div className="endereco">
                <p>Rua: {this.state.rua}</p>
                <p>Bairro: {this.state.bairro}</p>
                <p>Cidade: {this.state.cidade}</p>
                <p>Cep: {this.state.cep}</p> 
            </div>
        )
    }

}

export default CardAddress;