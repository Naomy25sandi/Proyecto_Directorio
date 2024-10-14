import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './paginas/Login.jsx'
import Micuenta from './paginas/Micuenta.jsx'
import Registro from './paginas/Registro.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/inicio",
    element: <Login />
  },
  {
    path: "/registro",
    element: <Registro />
  },
  {
    path: "/micuenta",
    element: <Micuenta />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
