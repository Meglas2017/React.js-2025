import "./Cart.css"
import { useCarContext } from "../../context/CarContextProvider"
import { Item } from "../Item/Item"
import { useEffect } from "react"

export const Cart = () => {

    
    // const { cart, clearCart, deleteItem, total, checkout } = CarContextProvider()
    const { car, total, addProductToCar, cleanCar, deleteProduct, plusProduct, minusProduct, checkout } = useCarContext()
    
    useEffect(() => {
            console.log(car);
            
        }, [car])



    return(
        <>
            <section className="item-list-container">
                <h2>Carrito de compra</h2>

                {car.length ? car.map((prod) => (
                    <Item
                        key={prod.id}
                        {...prod}
                    >
                        <span>Cantidad: {prod.quantity}</span>
                        <button className="btn" onClick={()=> deleteProduct(prod.id)}>Eliminar producto</button>
                    </Item>
                )) : <h3>El carrito está vacío</h3>}

                {car.length ? 
                    <div className="btn-container">
                        <button onClick={checkout}>Finalizar compra</button>
                        <button onClick={cleanCar}>Vaciar carrito</button>
                        <div>
                            <h3>Total: ${total}</h3>
                        </div>
                        
                    </div> 
                    : null}
            </section>
        </>
    )
}