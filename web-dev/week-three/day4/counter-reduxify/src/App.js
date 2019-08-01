import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from "react-redux";
import { increment, decrement} from "./store/utilities/counter";

class AppContainer extends Component {
  render() {
  return (
    <AppView counter={this.props.counterr} incrementCounter=
    {this.props.incrementCounter} decrementCounter={this.props.decrementCounter}/>
  );
}
}

// Declaration for mapStateTOProps;
// The keys in this returned object will be on your component's props object;
// The values of these keys reflect the value of the piece of state in your redux store;
const mapState = (state) => {
  return {
    counter: state.counter
  }
}

//declaration for mapdispatchtoprops;
//the keys in this returned object will be on your componet's props object as well;
// the values of these keys are anonymous functinos that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement())
  }
}

export default connect(mapState, mapDispatch)();
