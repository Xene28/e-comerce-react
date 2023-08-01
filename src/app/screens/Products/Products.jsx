import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../../Context/Products/ProductsContext";
import ProductList from "./components/ProductsList";
import ProductFilter from "./components/ProductFilter";
import styles from "./styles.module.css"
import CartDetail from "../CartDetail";

export default function Products() {
  const defaultOrderObj = { field: "title", asc: 1 };
  const [state, setState] = useState(useLocation().state || {});
  const [order, setOrder] = useState(defaultOrderObj);
  

  return (
    <ProductsContext.Provider value={{ state, setState, order, setOrder, defaultOrderObj }}>
      <main className="container-fluid">
        <h1>Products</h1>
        <div className={styles.rowProducts}>
          <ProductFilter />
          <ProductList /> 
        </div>
      </main>
    </ProductsContext.Provider>
  );
}