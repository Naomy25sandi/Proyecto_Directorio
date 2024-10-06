import Mycard from "./Mycard";

const ListaCards = ({ cards }) => {
    return (
        <div className="card">
            {cards.map(card => (
                <Mycard
                    key={card.id}
                    nombre={card.nombre}
                    descripcion={card.descripcion}
                    img={card.img}
                />
            ))}
        </div>
    );
};

export default ListaCards;
