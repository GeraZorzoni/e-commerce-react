import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className='producto'>
      <img src={product.imagen} alt={product.titulo} />
      <div>
        <h4>{product.titulo}</h4>
        <p>Precio: ${product.precio}</p>
        <p>Categoria: {product.categoria}</p>
      </div>
      <Link className='ver-mas' to={`/item/${product.id}`}>
        Ver mas
      </Link>
    </div>
  );
}
