import { useState } from "react";


export default function Interes({interes, color = "grey"}) {
    const [backgroundColor, setbackgroundColor] = useState(color)

    const handleBackgroundColor = () =>{
        console.log("Cambio el color de fondo de este botón")
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setbackgroundColor(`rgb(${r}, ${g}, ${b})`)
    }



    return(
        <div 
            className="interes" 
            style={{ backgroundColor : backgroundColor }}
            onClick={handleBackgroundColor}
        >
            <h4>
                {interes}
            </h4>
        </div>
    )
}