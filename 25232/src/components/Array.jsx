import "./Array.css"


export default function Array ({productos}) {

    return (
        <div className="myList">
            <ul>
                {productos ? productos.map((producto, index)=> (
                    <li key={index}>
                        {producto.fruta}
                    </li>
                )) : "No hay productos"}
            </ul>
        </div>

    )
}