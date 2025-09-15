import { useState } from "react";
import Botton from "./Botton.jsx";
import './Tarjeta.css'

export default function Tarjeta ({titulo4, descripcion}) {
const [miClase, setMiClase] = useState("")



const handleOcultar = () => {
    setMiClase("oculto")
    console.log(miClase)
} 
    return (
        <div className="card">
            <h4>{titulo}</h4>
            <picture><img src="www.google.com/fruta" alt="Sin imagen por ahora" /></picture>
            <p>{descripcion}</p>
            <Botton
                clase={""}
                message={"botonTexto"}
                funcion={handleOcultar}
            />
            <Botton
                clase={miClase}
                message={"Ocultar"}
                funcion={handleOcultar}
            />
        </div>
    )
}