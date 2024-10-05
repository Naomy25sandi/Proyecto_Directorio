import { Routes, Route } from 'react-router-dom';
import Home from '../paginas/Home';
import Login from '../paginas/Login';
const RutasPag = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} /> //El path es la dirección en la que se abre la pág y el element es el componente que se renderiza
            <Route path='/inicio' element={<Login />} />
        </Routes>
    )
}
export default RutasPag;