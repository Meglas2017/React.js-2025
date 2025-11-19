import {  useEffect, useState } from "react"
import { CartContext } from "./CartContext"



export function CarContextProvider ({children}) {
    const [ car, setCar] = useState([])
    const [ total, setTotal ] = useState (0)

    useEffect(() => {
        const newTotal = car.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)
        setTotal(newTotal)
    }, [car])

    const addProductToCar = (product) => {
        console.log(product);
        
        setCar(prev => [...prev,  product])
        
    }

    const cleanCar = () => {
        setCar([])
    }

    const deleteProduct = (id) => {
        console.log("Eliminar del carrito ", id);
        
    }

    const plusProduct = (id) => {
        console.log("Uno mas ", id);
    }

    const minusProduct = (id) => {
        console.log("Uno menos ", id);
    }
    const checkout = () => {
        const buy = confirm("¿Desea finalizar la compra?")
        console.log("Compra:", buy);
        
    }

    return (
        <CarContext.Provider value={{car, total, addProductToCar, cleanCar, deleteProduct, plusProduct, minusProduct, checkout}}>
            {children}
        </CarContext.Provider> 
    )
}

