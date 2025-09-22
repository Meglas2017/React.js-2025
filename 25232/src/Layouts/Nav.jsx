import { Link } from "react-router-dom";



export default function Nav () {


    return(
        <nav>
            <div className="menus">
                <button className="clases">Clases</button>
                <div className="submenuClases">
                    <ul>
                        <li>Clase 1</li>
                        <li>Clase 2</li>
                    </ul>
                </div>
                <Link to="/newproduct"><button>Nuevo producto</button></Link>
                
                <div></div>
            </div>
        </nav>
    )
}