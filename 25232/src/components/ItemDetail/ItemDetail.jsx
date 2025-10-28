import { Item } from "../Item/Item";
import { useCarContext } from "../../context/CarContextProvider";


export const ItemDetail = ({ detail }) => {
    const { car, addProductToCar, cleanCar, deleteProduct, plusProduct, minusProduct } = useCarContext()



  return (
    //Si ustedes deciden NO reutilizar el componente Item y aca hacer
    //una seccion totalmente nueva, pueden despreocuparse del Link en ItemList.

    //En el caso de optar por la NO reutilizacion, pueden colocar el Link envolviendo el <article>
    //en Item y dejar como estaba el ItemList, sin modificaciones

    <Item {...detail}>
      <button onClick={()=>addProductToCar(detail)}>Enviar al carrito</button>
    </Item>
  );
};
