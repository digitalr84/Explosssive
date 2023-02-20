import React, { FC } from 'react'
import { InputProps } from './types'
import './input.css'

export const Input: FC<InputProps> = ({
  show = false,
  error,
  name,
  type = 'text',
  disabled = false,
  onBlur,
  onChange,
  className = '',
}) => {
  return (
    <div className={`input-field`}>
      <input
        className={className}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        disabled={disabled}
      />
      {show && <p>{error}</p>}
    </div>
  )
}
