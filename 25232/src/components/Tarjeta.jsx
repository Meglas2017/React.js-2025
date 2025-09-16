import { useState } from "react";
import Botton from "./Botton.jsx";
import './Tarjeta.css'

export default function Tarjeta ({titulo, descripcion, url, boton}) {
const [miClase, setMiClase] = useState("")



const handleOcultar = () => {
    setMiClase("oculto")
    console.log(miClase)
} 
    return (
        <div className={`card-product ${miClase}`}>
            <h4>{titulo}</h4>
            <picture><img className="imgCard" src={url} alt="Sin imagen por ahora" /></picture>
            <p>{descripcion}</p>
            {boton ? <Botton
                clase={"green"}
                message={"Comprar"}
                funcion={handleOcultar}
            />: <></>}
            <Botton
                clase={"red"}
                message={"Ver más"}
                funcion={handleOcultar}
            />
        </div>
    )
}