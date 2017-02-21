import React from "react";
import ReactDOM from "react-dom";


class Button extends React.Component {

  constructor(props){
    super(props);
    this.get = this.get.bind(this);
  }

  vaciar(){
    var formulario = document.getElementById("app");
    formulario.innerHTML = '';
  }

  get(){
    fetch('http://localhost:3000/wines',)
    .then( response  => {
      response.json().
    then(r=>{
      console.log(r)
    })})
  }
  render() {
    return (
      <input type="button" value="OK" id="btn" class ="boton" onClick = {this.get}/>
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
