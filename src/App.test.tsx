import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders hello world', () => {
    // Arrange
    render(<App />)
    const heading = screen.getByRole('heading', {
      level: 1,
    })
    // Act
    // Expect
    expect(heading).toHaveTextContent('Hello Vladimir')
  })
})
