import './Botton.css'


export default function Botton ({clase, message, funcion}) {


    return (
        <>
            <button 
                className={`miButton ${clase}`}
                onClick={funcion}
                >
                {message}
            </button>
        </>
    )
}