import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <div>
      <CartContext.Provider value={{ carrito, setCarrito }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/productos/' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
