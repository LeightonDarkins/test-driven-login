import React from 'react'
import { render } from 'react-testing-library'

import Button from './Button'

describe('Button', () => {
  it('renders without errors', () => {
    const {container} = render(<Button />)
  })

  it('renders a html button with a provided label', () => {
    const {getByText} = render(<Button label='Login'/>)

    expect(getByText(/login/i).tagName).toEqual('BUTTON')
  })

  it('renders with provided id', () => {
    const {getByText} = render(<Button label='Login' id='login-button'/>)

    expect(getByText(/login/i).id).toEqual('login-button')
  })

  // it('renders with the provided type', () => {
  //   const {getByText} = render(<Button label='Login' id='login-button' type='submit'/>)

  //   expect(getByText(/login/i).type).toEqual('submit')
  // })
})