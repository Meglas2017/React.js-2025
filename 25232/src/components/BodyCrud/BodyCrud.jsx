import axios from "axios";
import { useEffect, useState, useRef } from "react";


export default function BodyCrud ({newProduct, handleSubmit, handleEmptyForm, handleChangeForm, dateBuyProduct, setDateBuyProduct}) {
    /**Estado para manejo de selects en el fomrulario: Categorias, Unidades, Marcas, Proveedores y Dolar */
    const [categories, setCategories] = useState([]); //Para Rubros
    const [units, setUnits] = useState([]);//Para UNIDADES
    const [brands, setBrands] = useState([]);//Para MARCAS
    const [suppliers, setSuppliers] = useState([])//Para PROVEEDORES
    const [dolar, setDolar] = useState([]);//Estado para el valor del DOLAR
    const [error, setError] = useState("")
    const [validationErrors, setValidationErrors] = useState([]);//Para guardar un error de validacion del formulario
    const inputRefs = useRef({});//Manejo de tabulacion para ir navegando en los campos de texto
    const validationClass = "inputValidation"
    const [loading, setLoading] = useState(false)
/**------useEffects------------- */
    /**Utilizo useEffects para llamar a funcion de obtener CUBS$ ni bien cargo la pagina */
    useEffect(()=>{
        setLoading(true)
        getCubs$()

    },[])
/**-------Funciones------------- */

    /**Funcion de consulta para CUBS$ */
    const getCubs$ = async () => {
        try {
            const responseCubs$ = await axios.get("/cubs$") 
            setCategories(responseCubs$.data.getCategories)
            setUnits(responseCubs$.data.getUnits)
            setBrands(responseCubs$.data.getBrands)
            setSuppliers(responseCubs$.data.getSuppliers)
            setDolar(responseCubs$.data.getDolar)
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)

        }
    }

        //Funcion para el manejo de teclas, especificamente salto de linea o codigo 13----------------------------------------------------------------
   const handleKeyDown = (e, currentField) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        const nextFieldIndex = currentField + 1;
        console.log(nextFieldIndex);
        
    // Verificar si existe una referencia para el siguiente campo
        if (inputRefs.current[nextFieldIndex]) {
        inputRefs.current[nextFieldIndex].focus();
        } else if (nextFieldIndex === 19) {
            validate(e)
        }
        
    }
   }

       /**Funcion de validacion de los inputs */
    const validateForm = () => {
        const newErrors = []

        //Verificacion del codigo
        if (!newProduct.codeProduct){
            newErrors.codeProduct = "Código de producto requerido"
        }

        //Verificacion del nombre
        if (!newProduct.nameProduct){
            newErrors.nameProduct = "Nombre del producto requerido"
        }

        //Verificacion de la descripcion
        if (!newProduct.descriptionProduct){
            newErrors.descriptionProduct = "Descripcion del producto requerida"
        }

        //Verificacion del proveedor
        if (!newProduct.supplierProduct){
            newErrors.supplierProduct = "Proveedor requerido"
        }   

        //Verificacion de la fecha de compra
        if (!newProduct.dateBuyProduct){
            newErrors.dateBuyProduct = "Fecha de compra requerida"
        }

        //Verificacion del costo
        if (isNaN(newProduct.costPriceProduct) || newProduct.costPriceProduct < 0){
            newErrors.costPriceProduct = "Costo del producto requerido"
        }

        //Verificacion de la ganancia
        if (isNaN(newProduct.gainProduct) || newProduct.gainProduct < 0){
            newErrors.gainProduct = "Ganancia requerida"
        }

        //Verificacion del iva
        if (![0, 10.5, 21].includes(newProduct.ivaProduct)){
            newErrors.ivaProduct = "IVA requerido"
        }

        //Verificacion del costo de envio
        if (isNaN(newProduct.costShipmentProduct) || newProduct.costShipmentProduct < 0){
            newErrors.costShipmentProduct = "Costo de envio requerido"
        }

        //Verificacion del costo USS
        if (newProduct.costUSS !== true && newProduct.costUSS !== false){
            newErrors.costUSS = "Valor booleano requerido del costo en dólares"
        }

        setValidationErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    //----------------------------------------------------------------
    
    // Funcion de llamada a validacion antes de handleSubmit
    const validate = (event) => {
        event.preventDefault();
        const valid = validateForm()
        console.log("Manejar con modal advertencia", valid)
    }
    //---------------------------------------------------------------------

    if (error) return <><p>Error al cargar esta página</p></>
    if (loading) return <>Cargando...</>
    return(
        
        <main>
            <h2>Nuevo producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="blockInputs">
                    <div className="inputDiv">
                        <label htmlFor="codeProduct">Código</label>
                        <input value={newProduct.codeProduct} onChange={handleChangeForm} id="codeProduct" name="codeProduct" type="text" />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="codeSupplierProduct">Codigo del proveedor</label>
                        <input value={newProduct.codeSupplierProduct} onChange={handleChangeForm} id="codeSupplierProduct" name="codeSupplierProduct" type="text" />
                    </div>
                </div>
                <div className="blockInputs">
                    <div className="inputDiv">
                        <label htmlFor="nameProduct">Nombre del producto</label>
                        <input value={newProduct.nameProduct} onChange={handleChangeForm} id="nameProduct" name="nameProduct" type="text" />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="dateBuyProduct">Fecha de compra</label>
                        <input 
                            placeholder={validationErrors.dateBuyProduct && validationErrors.dateBuyProduct}
                            className={validationErrors.dateBuyProduct && validationClass}                              
                            value={dateBuyProduct} 
                            onChange={handleChangeForm} 
                            type="date" 
                            name="dateBuyProduct" 
                            id="dateBuyProduct" 
                            ref={(el) => (inputRefs.current[12] = el)}
                            onKeyDown={(e) => handleKeyDown(e,12)}
                            required
                        />
                    </div>
                </div>
                <div className="blockInputs">
                    <div className="inputDiv">
                        <label htmlFor="descriptionProduct">Descripción</label>
                        <input value={newProduct.descriptionProduct} onChange={handleChangeForm} id="descriptionProduct" name="descriptionProduct" type="text" />
                    </div>
                </div>
                <div className="blockInputs">
                    <div className="inputDiv">
                        <label htmlFor="categoryProduct">Categoría</label>
                        <select 
                                placeholder={validationErrors.categoryProduct && validationErrors.categoryProduct}
                                className={validationErrors.categoryProduct && validationClass}  
                                name="categoryProduct" 
                                id="categoryProduct"
                                value={newProduct.categoryProduct}
                                onChange={handleChangeForm}
                                ref={(el) => (inputRefs.current[5] = el)}
                                onKeyDown={(e) => handleKeyDown(e,5)}
                                >
                                    <option value=""></option>
                                    {categories ? categories.map((category) => (
                                        <option key={category.id} value={category.category}>
                                        {category.category}
                                        </option>
                                    )): <></>}
                                    
                            </select>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="brandProduct">Marca</label>
                        <select 
                                placeholder={validationErrors.brandProduct && validationErrors.brandProduct}
                                className={validationErrors.brandProduct && validationClass}  
                                name="brandProduct" 
                                id="brandProduct"
                                value={newProduct.brandProduct}
                                onChange={handleChangeForm}
                                ref={(el) => (inputRefs.current[6] = el)}
                                onKeyDown={(e) => handleKeyDown(e,6)}
                                >
                                    <option value=""></option>
                                    {brands ? brands.map((brand) => (
                                        <option key={brand.id} value={brand.brand}>
                                        {brand.brand}
                                        </option>
                                    )) : <></>}
                            </select>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="supplierProduct">Proveedor</label>
                        <select 
                                placeholder={validationErrors.supplierProduct && validationErrors.supplierProduct}
                                className={validationErrors.supplierProduct && validationClass}  
                                name="supplierProduct" 
                                id="supplierProduct"
                                value={newProduct.supplierProduct}
                                onChange={handleChangeForm}
                                ref={(el) => (inputRefs.current[8] = el)}
                                onKeyDown={(e) => handleKeyDown(e,8)}
                                >
                                    <option value=""></option>
                                    {suppliers ? suppliers.map((supplier) => (
                                        <option key={supplier.id} value={supplier.supplier}>
                                        {supplier.supplier}
                                        </option>
                                    )) : <></>}
                            </select>
                    </div>
                </div>
                <div className="blockInputs">
                    <div className="inputDiv">
                        <label htmlFor="unitProduct">Unidad de medida</label>
                        <select 
                            placeholder={validationErrors.unitProduct && validationErrors.unitProduct}
                                className={validationErrors.unitProduct && validationClass}  
                                name="unitProduct" 
                                id="unitProduct"
                                value={newProduct.unitProduct}
                                onChange={handleChangeForm}
                                ref={(el) => (inputRefs.current[7] = el)}
                                onKeyDown={(e) => handleKeyDown(e,7)}
                                
                        >
                            <option value=""></option>
                            {units ? units.map((unit) => (
                                <option key={unit.id} value={unit.unit}>{unit.unit}</option>
                            )) : <></>}
                        </select>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="locationProduct">Ubicación</label>
                        <input 
                            placeholder={validationErrors.locationProduct && validationErrors.locationProduct}
                            className={validationErrors.locationProduct && validationClass}  
                            type="text" 
                            id="locationProduct" 
                            name="locationProduct"
                            value={newProduct.locationProduct}
                            onChange={handleChangeForm}
                            ref={(el) => (inputRefs.current[9] = el)}
                            onKeyDown={(e) => handleKeyDown(e,9)}
                        />
                    </div>
                </div>
                <div className="blockInputs">
                    <div className="inputDiv">
                        <label htmlFor="stockProduct">Stock</label>
                        <input 
                            placeholder={validationErrors.stockProduct && validationErrors.stockProduct}
                            className={validationErrors.stockProduct && validationClass}  
                            type="number" 
                            id="stockProduct" 
                            name="stockProduct" 
                            min={0} step={1}
                            value={newProduct.stockProduct}
                            onChange={handleChangeForm}
                            ref={(el) => (inputRefs.current[10] = el)}
                            onKeyDown={(e) => handleKeyDown(e,10)}
                        />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="stockMinProduct">Minimo de stock</label>
                        <input 
                            placeholder={validationErrors.stockMinProduct && validationErrors.stockMinProduct}
                            className={validationErrors.stockMinProduct && validationClass}  
                            type="number" 
                            id="stockMinProduct" 
                            name="stockMinProduct" 
                            min={0}
                            value={newProduct.stockMinProduct}
                            onChange={handleChangeForm}
                            ref={(el) => (inputRefs.current[11] = el)}
                            onKeyDown={(e) => handleKeyDown(e,11)}
                        />
                    </div>
                </div>
                <div className="blockInputs">
                    <div className="inputDiv">
                        <label htmlFor="costPriceProduct">Costo $</label>
                        <input 
                            placeholder={validationErrors.costPriceProduct && validationErrors.costPriceProduct}
                            className={validationErrors.costPriceProduct && validationClass}  
                            type="number" 
                            id="costPriceProduct" 
                            name="costPriceProduct" 
                            min={0} 
                            value={newProduct.costPriceProduct}
                            onChange={handleChangeForm}
                            ref={(el) => (inputRefs.current[13] = el)}
                            onKeyDown={(e) => handleKeyDown(e,13)}
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="gainProduct">Ganancia %</label>
                        <input 
                            placeholder={validationErrors.gainProduct && validationErrors.gainProduct}
                            className={validationErrors.gainProduct && validationClass}  
                            type="number" 
                            id="gainProduct" 
                            name="gainProduct" 
                            min={0} 
                            value={newProduct.gainProduct}
                            onChange={handleChangeForm}
                            ref={(el) => (inputRefs.current[14] = el)}
                            onKeyDown={(e) => handleKeyDown(e,14)}
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="ivaProduct">IVA</label>
                        <select 
                                placeholder={validationErrors.ivaProduct && validationErrors.ivaProduct}
                                className={validationErrors.ivaProduct && validationClass}  
                                name="ivaProduct" 
                                id="ivaProduct"
                                value={newProduct.ivaProduct}
                                onChange={handleChangeForm}
                                ref={(el) => (inputRefs.current[15] = el)}
                                onKeyDown={(e) => handleKeyDown(e,15)}
                                >
                                    <option value={0}>0</option>
                                    <option value={10.5}>10.5</option>
                                    <option value={21}>21</option>
                            </select>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="costShipmentProduct">Costo de envio %</label>
                        <input 
                            placeholder={validationErrors.costShipmentProduct && validationErrors.costShipmentProduct}
                            className={validationErrors.costShipmentProduct && validationClass}  
                            type="number" 
                            id="costShipmentProduct" 
                            name="costShipmentProduct" 
                            min={0} 
                            value={newProduct.costShipmentProduct}
                            onChange={handleChangeForm}
                            ref={(el) => (inputRefs.current[16] = el)}
                            onKeyDown={(e) => handleKeyDown(e,16)}
                            required
                        />
                    </div>
                </div>
                <div className="blockInputs">
                    <div className="inputDiv">
                        <label htmlFor="costUSS">Costo en dolares</label>
                        <input 
                            placeholder={validationErrors.costUSS && validationErrors.costUSS}
                            className={validationErrors.costUSS && validationClass}  
                            type="checkbox" 
                            id="costUSS" 
                            name="costUSS"
                            checked={newProduct.costUSS}
                            onChange={handleChangeForm}
                            ref={(el) => (inputRefs.current[17] = el)}
                            onKeyDown={(e) => handleKeyDown(e,17)}
                        />
                    </div>
                </div>
                <div className="blockInputs">
                    <p>Precio de venta calculado: ${}</p>
                </div>
                <div className="blockInputs">
                    <button onClick={handleEmptyForm}>Vaciar formulario</button>
                    <button 
                        onClick={validate} 
                        ref={(el) => (inputRefs.current[18] = el)}
                        onKeyDown={(e) => handleKeyDown(e,18)}
                        >Guardar producto
                    </button>
                </div>
                
            </form>
        </main>
    )
}