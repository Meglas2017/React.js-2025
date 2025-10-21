import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import { Boton } from "../Boton";

export const ItemList = ({ lista }) => {


  const handleAddToCar = (id) => {
    console.log(id);
    
  }

  return (
    <>
      {lista.length ? (
        lista.map((prod) => (
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
