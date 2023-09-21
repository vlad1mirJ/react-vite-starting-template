import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '*',
    Component: NotFound,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
