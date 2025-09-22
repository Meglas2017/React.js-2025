import { useEffect, useState } from "react"
import "./CartFloat.css"


export default function CartFloat ({carrito,handleCartEmpty}) {
const close = "<"
const [show, setShow] = useState("hide")
const  [ iconCartButton, setIconCartButton] = useState("right")

useEffect(()=>{

}, [show])


const handleShowCart = () => {
    show === "hide" ? setShow("show") : setShow("hide")
    iconCartButton === "left" ? setIconCartButton("right") : setIconCartButton("left")
    console.log(show, iconCartButton)
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
                <div className={`listCart ${show}`}>
                    <div onClick={handleShowCart} className={`iconCart `}>{close}</div>
                    <div className="lista">
                        <ul>
                            {carrito ? carrito.map((producto, index)=>
                                <li key={index}>{producto.cantidad}-{producto.product}</li>
                            ) : <></>}
                        </ul>
                        <div className="cartButtons">
                            <button onClick={handleCartEmpty}>🗑️ Vaciar carrito 🗑️</button>
                            <button>💸 Finalizar compra 💸</button>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}