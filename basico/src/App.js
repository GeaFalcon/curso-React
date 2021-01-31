import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./Footer";

function App() {
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo="Hola" numero={20} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
