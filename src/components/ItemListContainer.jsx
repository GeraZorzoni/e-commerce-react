import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirDatos().then((res) => {
      if (categoria) {
        setProducts(res.filter((producto) => producto.categoria === categoria));
        setTitulo(categoria);
      } else {
        setProducts(res);
        setTitulo("Productos");
      }
    });
  }, [categoria]); // para que cambie la categoria en cada filtro debo setear este parametro para que actualice en cada cambio con el useEffect

  return (
    <div>
      <ItemList products={products} titulo={titulo} />
    </div>
  );
}
