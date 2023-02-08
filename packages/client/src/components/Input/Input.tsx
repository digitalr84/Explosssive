import React, { FC } from 'react'
import { InputProps } from './types'
import './input.css'

export const Input: FC<InputProps> = ({
  name,
  type = 'text',
  disabled = false,
  onChange,
  className = '',
}) => {
  return (
    <div className={`input-field`}>
      <input
        className={className}
        name={name}
        onChange={onChange}
        type={type}
        disabled={disabled}
      />
    </div>
  )
}
