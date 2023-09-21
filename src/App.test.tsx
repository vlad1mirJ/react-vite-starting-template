import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import App, { routes } from './App'

describe('App', () => {
  it('should render Hello Vladimir', () => {
    // Arrange
    render(<App />)
    const heading = screen.getByRole('heading', {
      level: 1,
    })
    // Act
    // Expect
    expect(heading).toHaveTextContent('Hello Vladimir')
  })

  it('should render Not Found if path is invalid', () => {
    // Arrange
    const router = createMemoryRouter(routes, {
      initialEntries: ['/wrongRoute'],
    })
    render(<RouterProvider router={router} />)

    const heading = screen.getByRole('heading', {
      level: 1,
    })
    // Act
    // Expect
    expect(heading).toHaveTextContent('Not Found')
  })
})
