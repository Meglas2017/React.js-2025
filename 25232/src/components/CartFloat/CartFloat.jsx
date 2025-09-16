import { useEffect, useState } from "react"
import "./CartFloat.css"


export default function CartFloat ({carrito,handleCartEmpty}) {
const close = "<"
const [show, setShow] = useState(false)

useEffect(()=>{
    
}, [show])


const handleShowCart = () => {
    show === false ? setShow(true) : setShow(false)
    console.log(show)
}

    return(
        <section className="cart">
            <div className="heatCart">
                <div onClick={handleShowCart}>{close}</div>
                <h3>🛒 Carrito 🛒</h3>
            </div>
            <ul>
                {carrito ? carrito.map((producto, index)=>
                    <li key={index}>{producto.product}</li>
                ) : <></>}
            </ul>
            <div className="cartButtons">
                <button onClick={handleCartEmpty}>🗑️ Vaciar carrito 🗑️</button>
                <button>💸 Finalizar compra 💸</button>
            </div>
        </section>
    )
}