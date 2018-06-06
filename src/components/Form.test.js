import React from 'react'
import {render, renderIntoDocument, fireEvent} from 'react-testing-library'
import mockAxios from 'jest-mock-axios'

import Form from './Form'

describe('Form', () => {
  it('renders without errors', () => {
    render(<Form />)
  })

  it('renders the correct fields', () => {
    const {getByLabelText, getByText} = render(<Form />)

    getByLabelText(/username/i)
    getByLabelText(/password/i)
    getByText(/login/i)
  })

  it('allows changes to username and password values', () => {
    const {container, getByText, getByLabelText} = renderIntoDocument(<Form />)

    const usernameInput = getByLabelText(/username/i)
    expect(usernameInput.value).toEqual('')
    usernameInput.value = 'ChuckNorris'
    expect(usernameInput.value).toEqual('ChuckNorris')

    const passwordInput = getByLabelText(/password/i)
    expect(passwordInput.value).toEqual('')
    passwordInput.value = 'chuckIsTheGreatest247'
    expect(passwordInput.value).toEqual('chuckIsTheGreatest247')
  })

  it('allows a user to login with their username and password', () => {
    const {container, getByText, getByLabelText} = renderIntoDocument(<Form />)

    const usernameInput = getByLabelText(/username/i)
    usernameInput.value = 'ChuckNorris'
    fireEvent.change(usernameInput)

    const passwordInput = getByLabelText(/password/i)
    passwordInput.value = 'chuckIsTheGreatest247'
    fireEvent.change(passwordInput)

    const loginButton = getByText(/login/i)

    fireEvent.click(loginButton)

    expect(mockAxios.post).toHaveBeenCalledWith('http://localhost:4000/login', {
        username:'ChuckNorris',
        password:'chuckIsTheGreatest247'
      }
    )

    mockAxios.mockResponse({
      data: {},
      status: 200,
      statusText: 'OK'
    })

    getByText(/logout/i)

    mockAxios.reset()
  })
})