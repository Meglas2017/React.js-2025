import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clases1a3 from './pages/Clases1a3';
import Clase04 from './pages/Clase04';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clases1a3 />} />
        <Route path="/4" element={<Clase04 />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
