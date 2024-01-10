import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Carrito() {
  const { carrito } = useContext(CartContext);
  return (
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>
      <br />
      {carrito.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.titulo}</h2>
          <p>Precio Unitario: $ {producto.precio}</p>
          <p>Precio Total: $ {producto.precio * producto.cantidad}</p>
          <p>Cant: {producto.cantidad}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
