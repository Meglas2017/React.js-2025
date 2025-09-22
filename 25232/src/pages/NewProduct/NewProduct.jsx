import { useEffect, useState } from "react"
import "./NewProduct.css"
import BodyCrud from "../../components/BodyCrud/BodyCrud"



export default function NewProduct () {
    /**Estado de nuevo producto para cargar el formulario */
    const [newProduct, setNewProduct] = useState({
        imgProduct: "",
        codeProduct: "",          // código interno
        codeSupplierProduct: "",  // código del proveedor
        nameProduct: "",          // nombre del producto
        dateBuyProduct: "",       // fecha de compra del producto
        descriptionProduct: "",   // descripción
        categoryProduct: "",      // categoría
        brandProduct: "",         // marca
        supplierProduct: "",      // proveedor
        unitProduct: "",          // unidad de medida (ej. caja, unidad, kg)
        locationProduct: "",      // ubicación física
        stockProduct: 0,          // stock actual
        stockMinProduct: 0,       // stock mínimo
        costPriceProduct: 0,      // costo unitario
        gainProduct: 0,           // margen de ganancia (% o valor fijo)
        ivaProduct: 0,            // IVA aplicable (%)
        costShipmentProduct: 0,   // costo de envío
        costUSS: true                // costo en dólares (si aplica)
    })


    /**Funcion y estado para manejar con estado la fecha de hoy para precarga del date */
    const today = new Date()
    const offset = today.getTimezoneOffset()
    const localDate = new Date(today.getTime() - offset * 60 * 1000).toISOString().split("T")[0]
    const [dateBuyProduct, setDateBuyProduct] = useState(localDate);

    useEffect(()=>{
        console.log(newProduct)
    },[newProduct])


/**------------------Funciones------------------------------------------------------ */
    
    


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newProduct)
    }

    const handleEmptyForm = (e) => {
        e.preventDefault()
        console.log("Vaciar formulario")
        setNewProduct({
            imgProduct: "",
            codeProduct: "",          // código interno
            codeSupplierProduct: "",  // código del proveedor
            nameProduct: "",          // nombre del producto
            dateBuyProduct: "",       // fecha de compra del producto
            descriptionProduct: "",   // descripción
            categoryProduct: "",      // categoría
            brandProduct: "",         // marca
            supplierProduct: "",      // proveedor
            unitProduct: "",          // unidad de medida (ej. caja, unidad, kg)
            locationProduct: "",      // ubicación física
            stockProduct: 0,          // stock actual
            stockMinProduct: 0,       // stock mínimo
            costPriceProduct: 0,      // costo unitario
            gainProduct: 0,           // margen de ganancia (% o valor fijo)
            ivaProduct: 0,            // IVA aplicable (%)
            costShipmentProduct: 0,   // costo de envío
            costUSS: true  
        })
    }


    const handleChangeForm = (e) => {
        const { name, value, type, checked } = e.target; //Desestructuro para chequear que elemento esta disparando la funcion
        const parsedValue = (type === "number" || name === "ivaProduct") ? parseFloat(value) : value //Si el input es numerico, convierte el string en numerico para guardarlo en BBDD

        setNewProduct((prevNewProduct) => ({
            ...prevNewProduct,       // copiamos el estado anterior
            [name]: type === "checkbox" ? checked : parsedValue            // actualizamos la propiedad dinámica
        }));
    }

    return(
        <BodyCrud
            newProduct = {newProduct}
            handleSubmit = {handleSubmit}
            handleEmptyForm = {handleEmptyForm}
            handleChangeForm = {handleChangeForm}
            dateBuyProduct = {dateBuyProduct}
            setDateBuyProduct = {setDateBuyProduct}
        />
    )
}