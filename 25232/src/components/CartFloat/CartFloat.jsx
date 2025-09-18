import { useEffect, useState } from "react"
import "./CartFloat.css"


export default function CartFloat ({carrito,handleCartEmpty}) {
const close = "<"
const [show, setShow] = useState("hide")

useEffect(()=>{

}, [show])


const handleShowCart = () => {
    show === "hide" ? setShow("show") : setShow("hide")
    console.log(show)
}

    return(
        // <section className={`cart ${show}`}>
        //     <div onClick={handleShowCart} className="iconCart">
        //         <div>{close}</div>
        //     </div>
        //     <div className="verticalNav">
        //         <div>
                    
        //         </div>
        //         <div className="heatCart">
                    
        //             <h3>🛒 Carrito 🛒</h3>
        //         </div>
        //         <ul>
        //             {carrito ? carrito.map((producto, index)=>
        //                 <li key={index}>{producto.product}</li>
        //             ) : <></>}
        //         </ul>
        //         <div className="cartButtons">
        //             <button onClick={handleCartEmpty}>🗑️ Vaciar carrito 🗑️</button>
        //             <button>💸 Finalizar compra 💸</button>
        //         </div>
        //     </div>
        // </section>
        <>
            
            <section className={`cart `}>
                <div onClick={handleShowCart} className={`iconCart `}>{close}</div>
                <div className={`listCart ${show}`}>Lista</div>
            </section>
        </>
    )
}