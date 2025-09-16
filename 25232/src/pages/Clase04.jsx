import Header from "../Layouts/Header.jsx"
import Nav from"../Layouts/Nav.jsx"
import Foot from "../Layouts/Foot.jsx"
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

    useEffect(()=>{
        console.log(carrito)
    },[carrito])

    const handleCartAdd = (product) => {
        setCarrito(prevCarrito => [...prevCarrito, product])
    }

    const handleCartDelete = (product) => {
        setCarrito(prevCarrito => prevCarrito.filter(p => p.product !== product))
    }

    const handleCartEmpty = () => {
        setCarrito([])
    }


    return(
        <div className="page">
            <Header/>
            <Nav/>
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
            <Foot/>
        </div>
    )
}