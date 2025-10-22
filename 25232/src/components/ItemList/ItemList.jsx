import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import { Boton } from "../Boton";

export const ItemList = ({ lista, category }) => {
  console.log(category);
  

  const handleAddToCar = (id) => {
    console.log(id);
    
  }

  return (
    <>
      {lista.length ? (
        lista
        .filter(prod => !category || prod.category === category)
        .map((prod) => (
          <Item key={prod.id} {...prod}>
            <Boton text={"Agregar al carrito"} color={"#00800067"} handleClick={handleAddToCar} id={prod.id}/>
          </Item>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
};
