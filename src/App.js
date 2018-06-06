import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>test-driven-login</h1>
        <Form />
      </div>
    );
  }
}

export default App;
