import React from "react";

const Elementos = ({ elementos }) => {
  const { nombre, precio, id } = elementos;

  // Agregar producto al carrito

  const seleccionarProducto = (id) => {
    console.log("Comprando...", id);
  };

  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{precio}</h2>
      {/* utilizamos una ARROW FUNCTION para esperar a que ocurra el evento de CLICK , en caso de usar una function normal , estariamos indicando que queremos un evento directamente */}
      <button
        type="boton"
        onClick={() => {
          seleccionarProducto(id);
        }}
        id="comprar"
      >
        Comprar
      </button>
    </div>
  );
};
export default Elementos;
