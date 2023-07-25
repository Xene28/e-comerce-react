import Category from "./Components/Category";
import { getCategories } from "../../functions/queries";
import styles from './styles.module.css'
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

function Categories() {
    const {data: categories, error, isError, isSuccess, isLoading, } = getCategories();
    return (
        <>
            <div> 
            <h1>Categories</h1>
            <div className={styles.categoriesGrid}>
            {isLoading && <Loader />}
            {isError && <Error error={error} />}
            {isSuccess &&
            categories.map((cat) => {
              return <Category key={cat.id} id={cat.id} name={cat.name} image={cat.image} />;
            })}


            </div>
            </div>
        </>
       

    )
}

export default Categories;