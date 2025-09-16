import { Link } from 'react-router-dom';



export default function Product ({id, product, urlImage, description}) {


    return(
        <div className="cardProduct">
            <p className='id'>{id}</p>
            <h3 className="tittle">{product}</h3>
            <picture><img className='imgProduct' src={urlImage} alt={`Imagen de ${product}`} /></picture>
            <p className='productDescription'>{description}</p>
            <Link><button className=''>Ver más</button></Link>
            <button>Añadir al carrito</button>
        </div>
    )
}