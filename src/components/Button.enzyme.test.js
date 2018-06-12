import React from 'react'
import {mount, shallow, render} from 'enzyme'

import Button from './Button'

describe('Button (Enzyme)', () => {
  let wrapper

  it('mounts without errors', () => {
    mount(<Button label='Login' id='login-button' />)
  })

  it('renders a html button with a provided label', () => {
    wrapper = mount(<Button label='Login' id='login-button'/>)

    const button = wrapper.find('button')

    expect(button.name()).toEqual('button')
    expect(button.text()).toEqual('Login')
  })

  it('renders with provided id', () => {
    wrapper = mount(<Button label='Login' id='login-button'/>)

    const button = wrapper.find('button')

    expect(button.props().id).toEqual('login-button')
  })
})