import React from 'react';
import { deleteProductos } from "../Services/api";
import Mycard from "./Mycard";
import Swal from 'sweetalert2';

const ListaCards = ({ cards, mostrarBotones, btnEditarC }) => {


  const eliminarDato = async (id) => {
    const resultado= await Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
   });

   if (resultado.isConfirmed){
    await deleteProductos(id, 'centros/api/centrosDelete');
   }
   
  };

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Mycard
          key={card.id}
          nombre={card.nombre}
          descripcion={card.descripcion} // dirección, precio, teléfono
          imagen={card.imagen}
          id= {card.id}
          btnEliminar={() => eliminarDato(card.id)}
          mostrarBotones={mostrarBotones}
          btnEditar={() => btnEditarC(card)}
        />
      ))}
    </div>
  );
};

export default ListaCards;
