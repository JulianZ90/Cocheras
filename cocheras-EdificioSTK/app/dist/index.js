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
    fetch('http://localhost:4567/hello')
     .then( response  => {
      return response.json();
     })
     .then(function(parsedData) {
       var jason = JSON.stringify(parsedData)
       return jason ;
})
  }

  mostrarRespuesta(){
      var formulario = document.getElementById("app");
      var respuesta = this.get();
      console.log('respuesta: ' + respuesta);
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
