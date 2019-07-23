import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';


class Form extends Component{

  constructor(props) {
    super(props);
    this.state = {
      firstname: "John",
      firstnametemp: "John",
      firsttext: "John",
      lastname: "Doe",
      lastnametemp:"Doe",
      lasttext: "Doe",
      buttons: <button onClick={this.edit}>Edit</button>
    };
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
  }

  edit = () => {
    this.setState({
      firsttext: <input type ='text' value={this.state.firstname} onChange={this.handleFNameChange}/>,
      lasttext: <input type ='text' value={this.state.lastname} onChange={this.handleLNameChange}/>,
      buttons: <div><button onClick={this.submit}>Submit</button> <button onClick={this.cancel}>Cancel</button> </div>
    });
  }
 
  submit = (event) => {
    this.setState({
      firstname: this.state.firstnametemp,
      firsttext: this.state.firstnametemp,
      lastname: this.state.lastnametemp,
      lasttext: this.state.lastnametemp,
      buttons: <button onClick={this.edit}>Edit</button>
    })
  }
  
  cancel = (event) => {
    this.setState({
      firsttext: this.state.firstname,
      lasttext: this.state.lastname,
      buttons: <button onClick={this.edit}>Edit</button>
    })
  }
  render(){
    return <div>
      <h2>Simple form</h2>
      <div id="firstname">
        {this.state.firsttext}
      </div>

      <div id="lastname">
        {this.state.lasttext}
      </div>

      <div id="buttons">
      {/* <button onClick={this.edit}>Edit</button> */}
      {this.state.buttons}
      </div>

    </div>
  }
  handleFNameChange = (event) => {
    this.setState({
      firstnametemp: event.target.value,
       firsttext: <input type ='text' value={event.target.value} onChange={this.handleFNameChange}/>
      //firstname: event.target.value
    });
  }

  handleLNameChange = (event) => {
    this.setState({
      lastnametemp: event.target.value,
       lasttext: <input type ='text' value={event.target.value} onChange={this.handleLNameChange}/>
    });
  }
};


Form.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
}

function App() {
  return (
    <div className="app">

    <Form />

    </div>


  );
}

export default App;
