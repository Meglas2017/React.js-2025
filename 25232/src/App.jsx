import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clases1a3 from './pages/Clases1a3';
import Clase04 from './pages/Clase04';
import NewProduct from './pages/NewProduct/NewProduct';
import Header from './Layouts/Header';
import Foot from './Layouts/Foot';
import Nav from './Layouts/Nav';


function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Clases1a3 />} />
        <Route path="/4" element={<Clase04 />} />
        <Route path="/newproduct" element={<NewProduct/>} />
      </Routes>
      <Foot/>
    </BrowserRouter>

  )
}

export default App
