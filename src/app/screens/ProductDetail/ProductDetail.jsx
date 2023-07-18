import Error from "../../components/Error/Error"
import Loader from "../../components/Loader/Loader"
import Detail from "./Components/Detail"
import { getProductDetail } from "../../functions/queries"
import { useParams } from "react-router-dom"
import styles from "./styles.module.css"



function ProductDetail() {

    const { id } = useParams();
    const { data: product, error, isError, isLoading, isSuccess } = getProductDetail(id);
    console.log(getProductDetail(id))
    

    return (
        <>
        <h1>Product detail </h1>
        <div  className={styles.productsGrid}> 
            {isLoading && <Loader />}
            {isError && <Error error={error} /> }
            {isSuccess && <Detail product={product} />}
        </div>
            
        
        </>
    )
}

export default ProductDetail;