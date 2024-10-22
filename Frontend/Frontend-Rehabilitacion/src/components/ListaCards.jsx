import { deleteProductos } from "../Services/api";
import Mycard from "./Mycard";

const ListaCards = ({ cards, mostrarBotones, btnEditarC }) => {
  const eliminarDato = async (id) => {
    console.log(id);
    await deleteProductos(id, "centros/api/centrosDelete");
  };

  return (
    <div className="card">
      {cards.map((card) => (
        <Mycard
          key={card.id}
          nombre={card.nombre}
          descripcion={card.descripcion} // dirección, precio, teléfono
          img={card.img}
          btnEliminar={() => eliminarDato(card.id)}
          mostrarBotones={mostrarBotones}
          btnEditar={() => btnEditarC(card)} 
        />
      ))}
    </div>
  );
};

export default ListaCards;
