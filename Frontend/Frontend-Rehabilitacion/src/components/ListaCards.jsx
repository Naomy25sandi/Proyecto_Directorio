import React from 'react';
import { deleteProductos } from "../Services/api";
import Mycard from "./Mycard";
import Swal from 'sweetalert2';
import '../Style/mycard.css'

// Define el componente ListaCards que recibe props: cards, mostrarBotones y btnEditarC
const ListaCards = ({ cards, mostrarBotones, btnEditarC }) => {

// Función para eliminar un dato basado en su ID
  const eliminarDato = async (id) => {
    // alerta de confirmación antes de eliminar
    const resultado= await Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
   });
     // Si el usuario confirma la eliminación
   if (resultado.isConfirmed){
    await deleteProductos(id, 'centros/api/centrosDelete');// Llama a la función para eliminar el producto
   }

  };

  return (
    <div className="card-container">{/* Contenedor de las tarjetas */}
      {cards.map((card) => (
        <Mycard
          key={card.id}
          nombre={card.nombre}
          descripcion={card.descripcion} 
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
