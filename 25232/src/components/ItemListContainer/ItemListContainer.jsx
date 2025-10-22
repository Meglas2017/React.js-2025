import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Boton } from "../Boton";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams()

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>{titulo}</h1>
      <section className="sectionList">
        
        <ItemList lista={products} category={category}/>
      </section>
    </>
  );
};
