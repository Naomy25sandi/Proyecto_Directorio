import { deleteProductos } from "../Services/api";
import Mycard from "./Mycard";


const ListaCards = ({ cards,mostrarBotones }) => {
    const eliminarDato = async (id) => {
        console.log(id);
        await deleteProductos(id, "centros/api/centrosDelete");
    }
    return (
        <div className="card">
            {cards.map((card) => (
                <Mycard
                    key={card.id}
                    nombre={card.nombre}
                    descripcion={card.descripcion}// direccion, precio,telefono
                    img={card.img}
                    btnEliminar={() => eliminarDato(card.id)}
                    mostrarBotones={mostrarBotones}
                />
            ))}
        </div>
    );
};

export default ListaCards;
