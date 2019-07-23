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
      <h2>Form Edit</h2>
      <div id="firstname">
        {this.state.firsttext}
      </div>

      <div id="lastname">
        {this.state.lasttext}
      </div>

      <div id="buttons">
      {this.state.buttons}
      </div>

    </div>
  }
  handleFNameChange = (event) => {
    this.setState({
      firstnametemp: event.target.value,
       firsttext: <input type ='text' value={event.target.value} onChange={this.handleFNameChange}/>
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
  firstnametemp: PropTypes.string.isRequired,
  firstnametext: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  lastnametemp: PropTypes.string.isRequired,
  lastnametext: PropTypes.string.isRequired,
  buttons: PropTypes.string.isRequired
}


class Folder extends Component{
  constructor(props) {
    super(props);
    this.state = {
      temp:<ul>
      <li>File1</li>
      <li>File2</li>
      <li>File3</li>
      </ul> ,
      tempb: "",
      buttons: <button onClick={this.hide}>Hide</button>
    };
  }

  hide = () => {
    this.setState({
      tempb: this.state.temp,
      temp: <br></br>,
      buttons: <button onClick={this.show}>Show</button>
    })
  }

  show = () => {
    this.setState({
      temp:this.state.tempb,
      tempb: <br></br>,
      buttons: <button onClick={this.hide}>Hide</button>
    })
  }
  render(){
    return <div>
      <h2>Folder Contents Toggle</h2>
      Home
        {this.state.temp}
        {this.state.buttons}
    </div>
  }
};
function App() {
  return (
    <div className="app">

    <Form />
    <Folder />
    </div>


  );
}

export default App;
