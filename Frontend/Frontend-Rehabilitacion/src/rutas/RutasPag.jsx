import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import Registro from '../paginas/Registro';
import Micuenta from '../paginas/Micuenta';
import Admin from '../paginas/Admin';
import AcercaNosotros from '../paginas/AcercaNosotros';
import CentrosInfo from '../paginas/CentrosInfo';
import { AuthProvider } from '../rutas/AuthProvider';
import RutaPrivada from './RutaPrivada';

const RutasPag = () => {
    return (
        <AuthProvider>
            
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/inicio' element={<Login />} />
                <Route path='/Registro' element={<Registro />} />
                <Route path='/micuenta' element={<Micuenta />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/AcercaNosotros' element={<AcercaNosotros />} />
                <Route path='/centros/:id' element={<CentrosInfo />} />
            </Routes>
           
        </AuthProvider>
    );
};

export default RutasPag;
