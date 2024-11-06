import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import Registro from '../paginas/Registro';
import Micuenta from '../paginas/Micuenta';
import Admin from '../paginas/Admin';
import AcercaNosotros from '../paginas/AcercaNosotros';
import CentrosInfo from '../paginas/CentrosInfo';
import Centros from '../paginas/Centros';
import { AuthProvider } from '../rutas/AuthProvider';
import RutaPrivada, { RutaPrivadaSuperUsuario } from './RutaPrivada';

const RutasPag = () => {
    return (
        <AuthProvider>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/inicio' element={<Login />} />
                <Route path='/Registro' element={<Registro />} />
                <Route path='/admin' element={<RutaPrivadaSuperUsuario route={<Admin />} />} />
                {/* <Route path='/micuenta' element={<RutaPrivada route={<Micuenta/>}/>}/> */}
                <Route path='/AcercaNosotros' element={<AcercaNosotros />} />
                <Route path='/centros/:id' element={<CentrosInfo />} />
                <Route path='/centros/' element={<Centros/>} />
                <Route path='/micuenta' element={<Micuenta/>} />
            </Routes>

        </AuthProvider>
    );
};

export default RutasPag;
