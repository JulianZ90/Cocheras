import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  render() {
    return (
      <button className="boton">
        OK
        {/* TODO */}
      </button>
    );
  }
}

class Form extends React.Component{
  renderButton() {
    return <Button />;
  }
  render(){
    return(
    <form>
      Ingrese nombre : <input type="text" name="nombre"></input>
      {this.renderButton()}
    </form>

  );
  }
}

// ========================================

ReactDOM.render(
  <Form />,
  document.getElementById('app')
);
