// import { useState } from "react"
import Botton from "./Botton"
import "./GaleriaIntereses.css"
import Interes from "./Interes"


export default function GaleriaIntereses({intereses}) {
    

    

    return(
        <>
            
            {intereses ? 
                intereses.map((interes, index) =>
                    
                    <Interes
                    interes = {interes}
                    key={index}
                    />
                )
            : <></>}
        </>
    )
}


