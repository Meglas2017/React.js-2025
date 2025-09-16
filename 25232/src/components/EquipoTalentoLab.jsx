import Tarjeta from "./Tarjeta";



export default function EquipoTalentoLab({equipo}) {


    return(
        <>
        {equipo ? equipo.map((persona, index)=>
            <Tarjeta
                key={index}
                titulo={persona.nombre}
                descripcion={persona.rol}
                url={persona.imagen}
            />
        ) : ""}
        </>
    )
} 