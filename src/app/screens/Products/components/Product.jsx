import { Link } from "react-router-dom";
import styles from "./styles.module.css"

export default function Product({ product }) {
    const { id, title, price, images, category } = product;
    const [firstImage] = images;
    const imageURL = firstImage === "https://placeimg.com/640/480/any" ? "https://picsum.photos/640/640" : firstImage;

    return (
        <div>
            <Link to={`/products/${id}`}>
                <img src={imageURL} alt="..." className={styles.productsImg} />
                <div className="product-card" >
                    <h5>{title}</h5>
                    <h6>${price}</h6>
                    <h6>
                        category: {category.id}. {category.name}
                    </h6>

                </div>
            </Link>
        </div>
    )
}