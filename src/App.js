import React, { Component } from 'react';
import './App.css';

import Input from './components/Input'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>test-driven-login</h1>
        <Input
          id='username'
          label='Username'
          value='TestNorris'
          onChange={() => {}} />
        <Input
          id='password'
          label='Password'
          value='notARealPassword'
          isPassword
          onChange={() => {}} />
        <Button id='login-button' label='Login' />
      </div>
    );
  }
}

export default App;
