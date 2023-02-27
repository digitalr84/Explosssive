import { describe, expect, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

const content = 'Button Test'

describe('Button', () => {
  it('render', () => {
    render(<Button>Button Test</Button>)

    expect(screen.getByText(content)).toBeDefined()
  })
})
