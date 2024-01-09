import Item from "../components/Item";
import { toCapital } from "../helpers/toCapital";

export default function ItemList({ products, titulo }) {
  return (
    <div className='container'>
      <h2 className='main-title'>{toCapital(titulo)}</h2>
      <div className='productos'>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
