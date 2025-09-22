import { Link } from 'react-router-dom';
import "./Product.css"


export default function Product ({producto, addToCart, deleteCart}) {
    

    return(
        <div className="cardProduct">
            <p className='id'>{producto.id}</p>
            <h3 className="tittle">{producto.product}</h3>
            <picture><img className='imgProduct' src={producto.urlImage} alt={`Imagen de ${producto.product}`} /></picture>
            <p className='productDescription'>{producto.description}</p>
            <Link><button className=''>Ver más</button></Link>
            <button onClick={() => addToCart(producto)} >Añadir al carrito</button>
            <button onClick={() => deleteCart(producto.id)}>Eliminar del carrito</button>
        </div>
    )
}