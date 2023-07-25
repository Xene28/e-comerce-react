import { Link } from "react-router-dom";
import styles from './styles.module.css';

function Category(props) {
    const {id, name, image} = props;
    const imageURL = image === "https://placeimg.com/640/480/any" ? "https://picsum.photos/640/640": image;

    return (
        <>
            
                <div className={styles.card}>
                    <img src={imageURL} alt="..." className={styles.categoryImg} />
                    <div className="card-text">
                        <h2 className="card-title">{name}</h2>
                        <Link to={`/products?categoryId=${id}`}>Ver esta Categoria </Link>
                    </div>

                </div>
                
            
        </>
    )
}

export default Category;