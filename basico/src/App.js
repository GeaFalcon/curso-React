import React, { Fragment, useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import Elementos from "./Elementos";

function App() {
  // Crear listado de productos
  const [elementos, setElementos] = useState([
    { id: 1, nombre: "camisa0", precio: 50 },
    { id: 1, nombre: "camisa1", precio: 32 },
    { id: 1, nombre: "camisa2", precio: 54 },
    { id: 1, nombre: "camisa3", precio: 23 },
    { id: 1, nombre: "camisa4", precio: 54 },
  ]);
  // obtener fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo="Hola" numero={20} />

      <h1>Lista de productos</h1>
      {elementos.map((elementos) => (
        <Elementos
          key={elementos.id}
          elementos={elementos}
          precio={elementos.precio}
        />
      ))}
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
