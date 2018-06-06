import React from 'react'
import { render, renderIntoDocument, fireEvent } from 'react-testing-library'

import Input from './Input'

describe('Input', () => {
  it('renders without any errors', () => {
    const {container} = render(<Input />)

    expect(container).not.toBeUndefined()
  })

  it('renders with a label', () => {
    const {container, getByText} = render(<Input label='Username' />)

    // this assertion guarantees that
      // 1: some element has been rendered that contains text matching the given regex
      // 2: the element is a label
    expect(getByText(/username/i).tagName).toEqual('LABEL')
  })

  it('renders with a html input', () => {
    const {getByLabelText} = render(<Input id='username' label='Username' />)

    // this assertion guarantees that
      // 1: a label has been rendered
      // 2: for a form control
      // 3: that is an input
      // 4: that has the type: text
    expect(getByLabelText(/username/i).tagName).toEqual('INPUT')
    expect(getByLabelText(/username/i).type).toEqual('text')
  })

  it('passes an id property down', () => {
    const {container, getByLabelText} = render(<Input id='password' label='Password'/>)

    expect(getByLabelText(/password/i).tagName).toEqual('INPUT')
    expect(getByLabelText(/password/i).id).toEqual('password')
  })

  it('renders a password field', () => {
    const {container, getByLabelText} = render(
      <Input
        id='password'
        label='Password'
        isPassword
        />
      )
  
    expect(getByLabelText(/password/i).type).toEqual('password')
  })

  it('responds to onChange events', () => {
    const onChangeMock = jest.fn()

    const {getByLabelText} = renderIntoDocument(
      <Input
        id='username'
        label='Username'
        onChange={onChangeMock}
      />
    )

    const usernameField = getByLabelText(/username/i)

    usernameField.value = 'ChuckNorris'
    fireEvent.change(usernameField)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('receives a value prop from its parent', () => {
    const onChangeMock = jest.fn()

    const {getByLabelText} = render(
      <Input
        id='username'
        label='Username'
        value='TestNorris'
        onChange={onChangeMock} />
      )

    expect(getByLabelText(/username/i).value).toEqual('TestNorris')
  })
})