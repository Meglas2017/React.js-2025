import Producto from "../components/Product/Product.jsx"
import "./Clase04.css"
import { useState, useEffect } from "react"
import CartFloat from "../components/CartFloat/CartFloat.jsx"


export default function Clase04 () {
    const productos = [
        {
            id: 1,
            product: "Auriculares Bluetooth",
            urlImage: "https://example.com/images/auriculares.jpg",
            description: "Auriculares inalámbricos con cancelación de ruido y batería de larga duración."
        },
        {
            id: 2,
            product: "Mouse Gamer RGB",
            urlImage: "https://example.com/images/mouse.jpg",
            description: "Mouse ergonómico con iluminación RGB y sensor de alta precisión."
        },
        {
            id: 3,
            product: "Teclado Mecánico",
            urlImage: "https://example.com/images/teclado.jpg",
            description: "Teclado con switches azules, retroiluminación y diseño compacto."
        },
        {
            id: 4,
            product: "Monitor 27'' 4K",
            urlImage: "https://example.com/images/monitor.jpg",
            description: "Pantalla UHD con tecnología IPS y soporte ajustable."
        },
        {
            id: 5,
            product: "SSD NVMe 1TB",
            urlImage: "https://example.com/images/ssd.jpg",
            description: "Unidad de estado sólido ultrarrápida para gaming y edición."
        },
        {
            id: 6,
            product: "Smartwatch Deportivo",
            urlImage: "https://example.com/images/smartwatch.jpg",
            description: "Reloj inteligente con GPS, pulsómetro y resistencia al agua."
        },
        {
            id: 7,
            product: "Cámara Web Full HD",
            urlImage: "https://example.com/images/webcam.jpg",
            description: "Cámara con micrófono integrado, ideal para videollamadas y streaming."
        },
        {
            id: 8,
            product: "Silla Ergonómica",
            urlImage: "https://example.com/images/silla.jpg",
            description: "Silla de oficina con soporte lumbar y ajuste de altura."
        },
        {
            id: 9,
            product: "Tablet 10'' Android",
            urlImage: "https://example.com/images/tablet.jpg",
            description: "Tablet con pantalla HD, batería de larga duración y conectividad Wi-Fi."
        },
        {
            id: 10,
            product: "Cargador USB-C 65W",
            urlImage: "https://example.com/images/cargador.jpg",
            description: "Cargador rápido compatible con laptops, tablets y smartphones."
        }
        ];
    const [carrito, setCarrito] = useState([])

    /**Uso el hook effect para obtener la ultima actualizacion
     * e imprimirla en consola. Imprimir desde la funcion que lo actualiza
     * no me da el resultado final.
     */
    useEffect(()=>{
        console.log(carrito)
    },[carrito])

    const handleCartAdd = (producto) => {
        console.log(producto)
        setCarrito(prevCarrito => {
            /**Primero crea un nuevo array 
             * y busca con metodo find el item segun el id del producto.
             * Si esta dentro del array, la variable es true, sino false */
            const productoExistente = prevCarrito.find(item => item.id === producto.id);
            
            /**Si la variable era true, el producto ya estaba en el carrito
             * actualiza la cantidad sumandole 1
             */
            if (productoExistente) {
                // console.log(productoExistente)
                return prevCarrito.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
                );
            } else {
                // console.log(productoExistente)
                /**Si no estaba el producto en el carrito,
                 * agrega el campo cantidad con valor 1
                 */
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    }

    const handleCartDelete = (id) => {
        /**Crea un array con el ultimo valor para evitar errores,
         * va cargando en el nuevo array todos los productos 
         * mientras difieran en la comparacion del campo product.
         */
        setCarrito(prevCarrito => prevCarrito.filter(p => p.id !== id))
    }

    const handleCartEmpty = () => {
        /**Setea carrito con un array vacio */
        setCarrito([])
    }


    return(
        <div className="page">
            <main className="main">
                <div className="claseMain">
                    {productos ? productos.map((producto, index)=>
                        <Producto
                            key={index}
                            producto={producto}
                            addToCart = {handleCartAdd}
                            deleteCart = {handleCartDelete}
                        />
                    ) : <></>}
                </div>
                <CartFloat
                    carrito = {carrito}
                    handleCartEmpty = {handleCartEmpty}
                />
            </main>
        </div>
    )
}