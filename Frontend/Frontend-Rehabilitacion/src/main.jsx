import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './paginas/Login.jsx';
import Micuenta from './paginas/Micuenta.jsx';
import Registro from './paginas/Registro.jsx';
import Admin from './paginas/Admin.jsx'
import AcercaNosotros from './paginas/AcercaNosotros.jsx'
import CentrosInfo from './paginas/CentrosInfo.jsx'
import { AuthProvider } from './rutas/AuthProvider.jsx';
import RutaPrivada from './rutas/RutaPrivada.jsx';
import { RutaPrivadaSuperUsuario } from './rutas/RutaPrivada.jsx';

const router = createBrowserRouter([
  {
    path: "/*",
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
  // {
  //   path: "/micuenta",
  //   element: <RutaPrivada route={<Micuenta />} />
  // },
  {
    path: "/admin",
    element: <RutaPrivada route={<Admin />} />  // Usar RutaPrivadaSuperUsuario para superusuario
  },
  {
    path: "/AcercaNosotros",
    element: <AcercaNosotros />
  },
  {
    path: "/centros/:id",
    element: <CentrosInfo />
  },

  {
    path:"/micuenta",
    element: <Micuenta/>
  }
]);
// llame el AuthProvider aca
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
