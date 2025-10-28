import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import { Boton } from "../Boton";
import { useCarContext } from "../../context/CarContextProvider";


export const ItemList = ({ lista, category }) => {
  const { car, addProductToCar, cleanCar, deleteProduct, plusProduct, minusProduct } = useCarContext()
  

  

  return (
    <>
      {lista.length ? (
        lista
        /**Filtro por categoria si hay algo en category */
        .filter(prod => !category || prod.category === category)
        /**Por cada producto en la lista renderizo un ITEM con un BOTON como children*/
        .map((prod) => (
          <Item key={prod.id} {...prod}>
            <Boton 
              text={"Agregar al carrito"} 
              color={"#00800067"} 
              handleClick={()=>addProductToCar(prod)} 
              id={prod.id}
              />
          </Item>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
};
