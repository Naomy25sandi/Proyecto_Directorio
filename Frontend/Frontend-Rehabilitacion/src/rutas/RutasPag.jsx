import { Routes, Route } from 'react-router-dom';
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import Registro from '../paginas/Registro';
import Micuenta from '../paginas/Micuenta';
import Admin from '../paginas/Admin';
import AcercaNosotros from '../paginas/AcercaNosotros';


const RutasPag = () => {
    return (
        <Routes>
            <Route path='/*' element={<Home />} /> //El path es la dirección en la que se abre la pág y el element es el componente que se renderiza
            <Route path='/inicio' element={<Login />} />
            <Route path='/Registro' element={<Registro/>} /> 
            <Route path='/micuenta' element={<Micuenta/>} />
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/AcercaNosotros' element={<AcercaNosotros/>}/>

        </Routes>
    )
}
export default RutasPag;