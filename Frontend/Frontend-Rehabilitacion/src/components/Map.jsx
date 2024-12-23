import React from 'react';

const Map = () => {
  return (
    <div>
      <div style={{ width: '100%', overflow: 'hidden' }}> {/* Contenedor sin desplazamiento */}
        <iframe 
          width="100%" 
          height="300" 
          style={{ border: 'none', display: 'block' }} // Sin borde y sin desplazamiento
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=1%20km%20al%20Sur%20del%20Rastaurante%20ChanGhai%20Piedades%20de%20santa%20Ana+(Directorio%20de%20Centros%20de%20Rehabilitacion)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
      </div>
    </div>
  );
};

export default Map;