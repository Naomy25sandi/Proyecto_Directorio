import React from 'react';
import { deleteProductos } from "../Services/api";
import Mycard from "./Mycard";

const ListaCards = ({ cards, mostrarBotones, btnEditarC }) => {
  const eliminarDato = async (id) => {
    console.log(`Eliminando producto con ID:{id}`);
    try {
      await deleteProductos(id, 'centros/api/centrosDelete'); // Llama a la función de eliminación
      
    } catch (error) {
      console.error('Error al eliminar el producto:', error); // Manejo de errores
    }
  };

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Mycard
          key={card.id}
          nombre={card.nombre}
          descripcion={card.descripcion} // dirección, precio, teléfono
          img={card.img}
          btnElimina
          r={() => eliminarDato(card.id)}
          mostrarBotones={mostrarBotones}
          btnEditar={() => btnEditarC(card)} 
        />
      ))}
    </div>
  );
};

export default ListaCards;
