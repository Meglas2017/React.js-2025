


export default function Botton ({clase, message, funcion}) {


    return (
        <>
            <button 
                className={clase}
                onClick={funcion}
                >
                {message}
            </button>
        </>
    )
}