import Mycard from "./Mycard";

const ListaCards = ({ cards }) => {
    return (
        <div className="card">
            {cards.map((card,index) => (
                <Mycard
                    key={index}
                    nombre={card.nombre}
                    descripcion={card.descripcion}
                    img={card.img}
                />
            ))}
        </div>
    );
};

export default ListaCards;
