import Botton from "./Botton"
import './TarjetaProyecto.css'

export default function TarjetaProyecto({titulo, descripcion, url}) {


    return (
        <>
            <div className={`card-proyect`}>
                        <h4>{titulo}</h4>
                        <picture><img className="imgCard" src={url} alt="Sin imagen por ahora" /></picture>
                        <p>{descripcion}</p>
                        
                        <Botton
                            clase={"green"}
                            message={"Explorar proyecto"}
                            funcion={() => console.log(`Explorando proyecto ${titulo}`)}
                        />
                    </div>
        </>
    )
}