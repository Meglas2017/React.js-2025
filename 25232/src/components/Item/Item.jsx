import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, name, price, description, imageUrl, children }) => {
/**Dejo LINK dentro del article pero no encapsula boton para no generar conflicto */
  return (
    <><article className="product-item">
        <Link to={`/detail/${id}`}>
          
            <img src={imageUrl} alt={description} />
            <h2 className="product-title">{name}</h2>
            <p>Precio: ${price}</p>
            <p>{description}</p>
        
        </Link>
        {children}
       </article>
      
    </>
  );
};
