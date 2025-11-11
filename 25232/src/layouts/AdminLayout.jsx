/**Componente Outlet proviene de react router dom y nos permite 
 * diferenciar rutas protegidas
 */


import {Outlet} from "react-router-dom";


export const AdminLayout = () => {


    return(
        <>
            <section className="admin-layout">
                <Outlet/>        
            </section>
            
        </>
    )
}