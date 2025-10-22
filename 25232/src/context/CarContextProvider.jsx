import { useContext, useState } from "react"
import { createContext } from "react"


export const CarContext = createContext()



export function CarContextProvider ({children}) {
    const [ car, setCar] = useState([])

    const addProductToCar = (product) => {
        setCar(prev => [...prev,  product])
        //Abre un prev del car y agrega el 
        // producto si no existe, luego 
        // guarda en car el estado actualizado. 
        // Si existia llama a plusProduct
    }

    const cleanCar = () => {
        setCar([])
        //Setea car vacio
    }

    const deleteProduct = (id) => {
        console.log("Eliminar del carrito ", id);
        //Busca producto por id y lo elimina del car
        
    }

    const plusProduct = (id) => {
        console.log("Uno mas ", id);
        //Busca producto por ID y agrega 
        // uno a cantidad con tope en el stock
    }

    const minusProduct = (id) => {
        console.log("Uno menos ", id);
        //Busca producto por id y resta 
        // uno a cantidad con tope en cero
        // donde elimina el producto del car
    }

    return (
        <CarContext.Provider value={{addProductToCar, cleanCar, deleteProduct, plusProduct, minusProduct}}>
            {children}
        </CarContext.Provider> 
    )
}

export function useCarContext () {
    return useContext(CarContext)
}