import React from "react";
import ReactDOM from "react-dom";


class Button extends React.Component {

  constructor(props){
    super(props);
    this.get = this.get.bind(this);
    this.mostrarRespuesta = this.mostrarRespuesta.bind(this);
  }

  vaciar(){
    var formulario = document.getElementById("app");
    formulario.innerHTML = '';
  }

  get(){
    fetch('http://172.16.82.136:4567/hello')
    // .then( response  => {
    //   return response.json()
    // })
  }

  mostrarRespuesta(){
      var formulario = document.getElementById("app");
      formulario.innerHTML = this.get();
  }
  render() {
    return (
      <input type="button" value="OK" id="btn" class ="boton" onClick = {this.mostrarRespuesta}/>
    );
  }
}

class Input extends React.Component {
  render(){
    return(
      <form>
        Ingrese nombre : <input type="text" name="nombre"></input>
      </form>
    )
  }
}

class Form extends React.Component{
  render(){
    return(
      <form id="app" ref="form" >
        <Input/><Button/>
      </form>
    );
  }
}


// ========================================

ReactDOM.render(
  <Form />,
  document.getElementById('app')
);
