import React,{ FC } from 'react';
import { Props } from './types';
import './button.css';

export const Button:FC<Props> = ({  
  type = 'button',
  disabled = false,
  className = '',
  onClick
}) => (
  <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}>
  </button>
);
