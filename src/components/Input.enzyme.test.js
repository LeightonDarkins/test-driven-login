import React from 'react'
import {mount} from 'enzyme'

import Input from './Input'

describe('Input', () => {
  let wrapper

  it('renders without any errors', () => {
    mount(<Input />)
  })

  it('renders with a label', () => {
    wrapper = mount(<Input label='Username' />)

    expect(wrapper.find('label')).toHaveLength(1)
    expect(wrapper.find('label').text()).toEqual('Username')
  })

  it('renders with a html text input', () => {
    wrapper = mount(<Input id='username' label='Username' />)

    expect(wrapper.find('input').name()).toEqual('input')
    expect(wrapper.find('input').props().type).toEqual('text')
  })

  it('passes an id property down', () => {
    wrapper = mount(<Input id='password' label='Password'/>)

    expect(wrapper.find('input').props().id).toEqual('password')
    expect(wrapper.find('label').props().htmlFor).toEqual('password')
  })

  it('renders a password field', () => {
    wrapper = mount(
      <Input
        id='password'
        label='Password'
        isPassword
        />
      )
  
    expect(wrapper.find('input').props().type).toEqual('password')
  })

  it('responds to onChange events', () => {
    const onChangeMock = jest.fn()

    wrapper = mount(
      <Input
        id='username'
        label='Username'
        onChange={onChangeMock}
      />
    )

    wrapper.find('input')
      .simulate('change')

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('receives a value prop from its parent', () => {
    const onChangeMock = jest.fn()

    const wrapper = mount(
      <Input
        id='username'
        label='Username'
        value='TestNorris'
        onChange={onChangeMock} />
      )

    expect(wrapper.find('input').props().value).toEqual('TestNorris')
  })
})