import "./Layouts.css"


export default function Header () {


    return(
        <header>
            <div className="tittleHeader">
                <picture><img className="imgHeader" src="images/G.png" alt="Logo de la empresa G-Tech" /></picture>
                <h2>G-Tech</h2>  
            </div>
            
            <div className="line"></div>
            
        </header>
    )
}