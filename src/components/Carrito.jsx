import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };
  return (
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>
      <br />
      {carrito.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.titulo}</h3>
          <p>Precio Unitario: $ {producto.precio}</p>
          <p>Precio Total: $ {producto.precio * producto.cantidad}</p>
          <p>Cant: {producto.cantidad}</p>
          <br />
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Precio Total: ${precioTotal()} </h2>
          <button className='agregar-al-carrito' onClick={handleVaciar}>
            Vaciar
          </button>
          <Link to='/checkout' className='agregar-al-carrito'>
            Finalizar Compra
          </Link>
        </>
      ) : (
        <h2>El Carrito Esta Vacio :( </h2>
      )}
    </div>
  );
}
