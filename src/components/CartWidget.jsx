import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <div>
      <Link to='/carrito' className='menu-link'>
        Carrito
        <span className='numerito'> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
}
