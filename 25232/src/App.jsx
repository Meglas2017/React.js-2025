import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botton from '../src/components/Botton.jsx'
import Array from './components/Array.jsx'
import Tarjeta from './components/Tarjeta.jsx'
import EquipoTalentoLab from './components/EquipoTalentoLab.jsx'
import TarjetaProyecto from './components/TarjetaProyecto.jsx'
import GaleriaIntereses from './components/GaleriaIntereses.jsx'


function App() {
  const [count, setCount] = useState(0)
  const productos = [
    {"fruta":"Manzanas", "descripcion" :"Manzanas crujientes y jugosas, con sabor dulce y ligeramente ácido, perfectas para comer frescas o en postres y recetas saludables.", "url" : "/images/manzanas.jpg"}, 
    {"fruta":"Peras", "descripcion" :"Peras suaves y jugosas, de sabor dulce y delicado, ideales para comer frescas, en ensaladas, postres o compotas caseras.", "url" : "/images/peras.jpg"},
     {"fruta":"Naranjas", "descripcion" :"Naranjas jugosas y refrescantes, con sabor cítrico y dulce, ricas en vitamina C, perfectas para comer, zumos o postres.", "url" : "/images/naranjas.webp"}]

  const equipo = [
    { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://api.dicebear.com/9.x/avataaars/svg?seed=silvia&gender=female' },
    { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://api.dicebear.com/9.x/avataaars/svg?seed=luis&gender=male' },
    { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://api.dicebear.com/9.x/avataaars/svg?seed=matias&gender=male' },
    { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://api.dicebear.com/9.x/avataaars/svg?seed=sabrina&gender=female' },
  ];

  const proyectos = [
    {titulo : "Plataforma de gestión", descripcion: "Una herramienta para optimizar la gestión de equipos.", url : "https://picsum.photos/400/300" },
    {titulo : "Dashboard", descripcion: "Tablero de herramientas de administración", url : "https://picsum.photos/400/301" },
    {titulo : "Juego de mesa", descripcion: "Juego de mesa virtual para sifrutar con compañeros",  url : "https://picsum.photos/400/302" },
  ]
  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

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

      <section className='sectionClase'>
        <h3>Clase 02 - Tarjetas</h3>
        <div className='miGrilla'>
          
          {productos.map((producto, index)=> 
            <Tarjeta 
              key = {index}
              titulo = {producto.fruta}
              descripcion = {producto.descripcion}
              botonTexto = "Ver más"
              url = {producto.url}
              boton={true}
            ></Tarjeta>
          )}
        </div>
      </section>
      
      <section>
        <div className='tituloClase'>
          <h2>Clase 03</h2>
          
          <picture><img src="/images/equipo.png" alt="" /></picture>
        </div>
        <h3>Ejercicio 1</h3>
        <article className='trabajo1 miGrilla'>
          
          <EquipoTalentoLab
            equipo = {equipo}
          />
        </article>
        <h3>Ejercicio 2</h3>
        <article className='trabajo2 miGrilla'>
          
          {proyectos ? proyectos.map((proyecto, index) =>
            <TarjetaProyecto
            key={index}
              titulo = {proyecto.titulo}
              descripcion = {proyecto.descripcion}
              url={proyecto.url}
            />
          ) : <></>}

        </article>
        <h3>Ejercicio 3</h3>
        <article className='trabajo2 miGrilla'>
          <GaleriaIntereses
            intereses = {intereses}
          />
        </article>
        
      </section>
        


      </div>
    </>
  )
}

export default App
