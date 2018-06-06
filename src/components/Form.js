import React from 'react'
import axios from 'axios'

import Input from './Input'
import Button from './Button'

const INITIAL_STATE = {
  isLoggedIn: false,
  username: '',
  password: ''
}

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleUsernameCange = this.handleUsernameCange.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()

    axios.post('http://localhost:4000/login', {
      username: this.state.username,
      password: this.state.password
    }).then(() => {
      this.setState({ isLoggedIn: true })
    }).catch(() => {
      console.error('something went wrong')
    })

    
  }

  handleUsernameCange (event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value})
  }

  handleLogout (event) {
    event.preventDefault()

    this.setState(INITIAL_STATE)
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <form onSubmit={this.handleLogout}>
          <Button id='logout-button' label='Logout' />
        </form>
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          id='username'
          label='Username'
          value={this.state.username}
          onChange={this.handleUsernameCange} />
        <Input
          id='password'
          label='Password'
          isPassword
          value={this.state.password}
          onChange={this.handlePasswordChange} />
        <Button id='login-button' label='Login' />
      </form>
    )
  }
}

export default Form