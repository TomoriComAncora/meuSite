import React, { Component } from "react";

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    };
    this.entrar = this.entrar.bind(this);    
  }

  entrar(){
    this.setState({nome: "Visitante"});
  }


  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <button onClick={this.entrar}>Entrar como visitante</button>
        <button onClick={()=>{this.setState({nome:"Saiu"})}}>Sair</button>
      </div>
    );
  }
}

export default Membro;
