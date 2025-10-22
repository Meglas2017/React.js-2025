import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CarContextProvider } from "./context/CarContextProvider";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <CarContextProvider>
          <div className="divMain">
            <Header />
            <Routes>
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
            </Routes>
            <Footer />
          </div>
        </CarContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
