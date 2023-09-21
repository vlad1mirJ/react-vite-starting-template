import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export const routes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '*',
    Component: NotFound,
  },
]

const browserRouter = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={browserRouter} />
}

export default App
