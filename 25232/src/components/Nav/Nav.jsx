import { Link } from "react-router-dom";
import { useCarContext } from "../../context/CarContextProvider";
import { useEffect } from "react";

export const Nav = () => {

  //Desestructuro las funciones del contexto para carrito
  const { car, addProductToCar, cleanCar, deleteProduct, plusProduct, minusProduct } = useCarContext()

  useEffect(() => {
    console.log("Carrito actualizado: ", car);
  }, [car])

  //Dejamos los Link preparados para cuando hagamos filtrado por categoria
  //Por ahora, quedan de vista, pero sirven al tocar para escribir la ruta
  //en la barra de busqueda
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/salado"}>Salado</Link>
        </li>
        <li>
          <Link to={"/category/dulce"}>Dulce</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            Carrito 🛒 {car.length}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
