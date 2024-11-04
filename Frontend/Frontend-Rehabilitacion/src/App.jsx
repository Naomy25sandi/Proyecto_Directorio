//import { useState } from 'react';

import './App.css';
import { AuthProvider } from './rutas/AuthProvider';
import RutasPag from './rutas/RutasPag';
// Asegúrate de que la ruta sea correcta

function App() {
  return (
      
    <AuthProvider>
      
      <RutasPag />
    
    </AuthProvider>
    
  );
}

export default App;
