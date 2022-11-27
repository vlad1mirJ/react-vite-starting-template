import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App, WithWrappers } from './App'

describe('App', () => {
  it('should render Hello Vladimir', () => {
    // Arrange
    render(<WithWrappers />)
    const heading = screen.getByRole('heading', {
      level: 1,
    })
    // Act
    // Expect
    expect(heading).toHaveTextContent('Hello Vladimir')
  })

  it('should render Not Found if path is invalid', () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/wrongRoute']}>
        <App />
      </MemoryRouter>
    )
    const heading = screen.getByRole('heading', {
      level: 1,
    })
    // Act
    // Expect
    expect(heading).toHaveTextContent('Not Found')
  })
})
