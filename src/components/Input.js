import React from 'react'

export default ({id, label, value, isPassword, onChange}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={isPassword ? 'password' : 'text'}
        value={value}
        onChange={onChange} />
    </div>
  )
}