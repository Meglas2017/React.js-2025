import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CarContextProvider } from "./context/CarContextProvider";
import { Cart } from "./components/Cart/Cart";
import { MainLayout } from "./layouts/MainLayout.jsx";
import { AdminLayout } from "./layouts/AdminLayout.jsx";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <CarContextProvider>
          <div className="divMain">
            
            <Routes>
              <Route element={<MainLayout />} >
                <Route
                  path="/"
                  element={<ItemListContainer titulo={"Bienvenidos"} />}
                />
                <Route
                  path="/category/:category"
                  element={<ItemListContainer/>}
                />
                <Route 
                  path="/detail/:id" 
                  element={<ItemDetailContainer />} 
                />
                <Route
                  path="/cart"
                  element={<Cart/>}
                />
                
                </Route>
                <Route path="/admin" element={<AdminLayout/>}>
                  <Route index element={<Login/>}/>
                  <Route path="alta-productos" element={
                    <RutaProtegida>
                      <ProductFormContainer/>
                    </RutaProtegida>
                  }
                  />
                </Route>
              </Routes>
            <Footer />
          </div>
        </CarContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
