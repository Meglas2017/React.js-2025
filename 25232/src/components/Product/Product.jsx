import { Link } from 'react-router-dom';
import "./Product.css"


export default function Product ({producto:{id, product, urlImage, description}, addToCart, deleteCart}) {
    

    return(
        <div className="cardProduct">
            <p className='id'>{id}</p>
            <h3 className="tittle">{product}</h3>
            <picture><img className='imgProduct' src={urlImage} alt={`Imagen de ${product}`} /></picture>
            <p className='productDescription'>{description}</p>
            <Link><button className=''>Ver más</button></Link>
            <button onClick={() => addToCart({product})} >Añadir al carrito</button>
            <button onClick={() => deleteCart(product)}>Eliminar del carrito</button>
        </div>
    )
}