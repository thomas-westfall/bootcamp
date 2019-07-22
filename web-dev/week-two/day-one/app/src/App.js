import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

class ContactCard extends Component{
  render(){
    return <tr>
      <td>{this.props.name}</td>
      <td>{this.props.homephone}</td>
      <td>{this.props.email}</td>
      <td>{this.props.workphone}</td>
    </tr>
  }
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  homephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  workphone: PropTypes.string
}

function App() {
  return (
    <div className="app">
      <div className="contactlist">
        <h1>Contact List</h1>
      <table>
      <ContactCard name="John Doe" homephone="123-456-789" email="johndoe@example.com" workphone="987-654-321" />
      <ContactCard name="Mary Sue" homephone="000-000-000" email="mjane@example.com" workphone="123-123-123" />
      <ContactCard name="c3 name" homephone="c3 homephone" email="c3 email" workphone="c3 workphone" />
      </table>
    </div>

      <div className="decrement">
        <h1>Increment and Decrement</h1>
      </div>
    </div>


  );
}

export default App;
