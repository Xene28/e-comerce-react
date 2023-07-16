import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../../functions/queries";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import Product from "./components/Product";
import styles from "./styles.module.css"

function Products() {

    const search = useLocation().search;
    const [filter, setFilter] = useState(search);
    const { data: products, error, isError, isLoading, isSuccess } = getProducts(filter);

    filter !== search && setFilter(search);
    return (
        <>
            <h1>Products</h1>
            <div>
                <div className={styles.productsGrid}>
                    {isLoading && <Loader />}
                    {isError && <Error error={error} /> }
                    {isSuccess && products.map((prod) => {
                        return <Product key={prod.id} product={prod} />
                    }) }
                </div>

            </div>
        </>
    )
}

export default Products;