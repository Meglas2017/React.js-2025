import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botton from '../src/components/Botton.jsx'
import Array from './components/Array.jsx'
import Tarjeta from './components/Tarjeta.jsx'


function App() {
  const [count, setCount] = useState(0)
  const productos = [
    {"fruta":"Manzanas", "descripcion" :"Manzanas crujientes y jugosas, con sabor dulce y ligeramente ácido, perfectas para comer frescas o en postres y recetas saludables."}, 
    {"fruta":"Peras", "descripcion" :"Peras suaves y jugosas, de sabor dulce y delicado, ideales para comer frescas, en ensaladas, postres o compotas caseras."},
     {"fruta":"Naranjas", "descripcion" :"Naranjas jugosas y refrescantes, con sabor cítrico y dulce, ricas en vitamina C, perfectas para comer, zumos o postres."}]

  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>¡Bienvenido a la comisión 25232! </h1>
      <h2>React.js</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Array productos={productos}/>

      
        <h3>Tarjetas</h3>
        <section className='miGrilla'>
          
          {productos.map((producto, index)=> 
            <Tarjeta 
              key = {index}
              titulo = {producto.fruta}
              descripcion = {producto.descripcion}
              botonTexto = "Ver más"
            ></Tarjeta>
          )}
        </section>


      </div>
    </>
  )
}

export default App
