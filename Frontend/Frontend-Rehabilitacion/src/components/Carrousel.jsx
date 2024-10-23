import Carousel from 'react-bootstrap/Carousel';
// creacion de mi componente Navbar
function Carrousel() {
    return (
        <div className='container'>
        <Carousel >
            <Carousel.Item  >
                <img 
                  
                    width={"1200px"}
                    src="src/assets/Captura.png"
                    alt="Captura"
                />
                <Carousel.Caption>
                    <h5>Casa Jaguar</h5>
                    <p> Ofrecemos atención en todo el país, estás aún paso de transformar tu vida! </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    width={"1200px"}
                    src="src\assets\Captura2.png"
                    alt=""
                />
                <Carousel.Caption>
                    <h5>Llamá ahora!</h5>
                    <p>Puedes empezar a cambiar tu vida con una llamada!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    width={"1200px"}
                    src="src\assets\Captura3.png"
                    alt=""
                />
                <Carousel.Caption>
                    <h5>Empezá marcando la diferencia</h5>
                    <p>Cuida tu cuerpo y mente!</p>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Carrousel;