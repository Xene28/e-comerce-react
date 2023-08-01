import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../functions/queries";
import { ProductsContext } from "../../../Context/Products/ProductsContext";
import { useSearchParams } from "react-router-dom";
import Error from "../../../components/Error/Error";
import Loader from "../../../components/Loader/Loader";
import ProductCard from "./ProductCard";
import styles from "./styles.module.css"

export default function ProductList() {
  const { order, state } = useContext(ProductsContext);
  const [searchParams, setSearchParams] = useSearchParams(state);
  const { data: products, error, isLoading, isError, isSuccess } = getProducts(searchParams.toString());
  const [sortedProducts, setSortedProducts] = useState(products || []);

  useEffect(() => {
    setSearchParams(state);
  }, [state, setSearchParams]);

  useEffect(() => {
    products &&
      setSortedProducts(products.toSorted((a, b) => (a[order.field] > b[order.field] ? order.asc : -order.asc)));
  }, [products, setSortedProducts, order]);

  return (
    <>
      <div className="col-2"></div>
      <main className={styles.productsList}>
        <div className={styles.productsWrapper}>
          {isLoading && <Loader />}
          {isError && <Error error={error} />}
          {isSuccess &&
            sortedProducts.map((prod) => {
              return <ProductCard key={prod.id} product={prod} />;
            })}
        </div>
      </main>
    </>
  );
}