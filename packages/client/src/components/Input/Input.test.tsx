import { expect, it, describe } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('render', () => {
    render(<Input />)
  })

  it('render', () => {
    render(<Input label="my_label" />)
    expect(screen.getByText('my_label')).toBeDefined()
  })
})
