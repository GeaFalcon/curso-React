import React from "react";

const Elementos = ({ elementos }) => {
  const { nombre, precio, id } = elementos;
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{precio}</h2>
    </div>
  );
};
export default Elementos;
