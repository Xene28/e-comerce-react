import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import CartContext from "../../../Context/Cart/CartContext";
import { useContext } from "react";


export default function Product({ product }) {
  const { addToCart } = useContext(CartContext)
  const { id, title, price, images, category } = product;
  const [firstImage] = images;
  const imageURL =
    firstImage === "https://placeimg.com/640/480/any"
      ? "https://picsum.photos/640/640"
      : firstImage;

  return (
    <li className={styles.productCard}>
      <div className={styles.productCardContent}>
        <Link to={`/products/${id}`}>
          <img src={imageURL} alt="..." className={styles.productsImg} />
          <h5>{title}</h5>
        </Link>
        <h6>
            {category.name}
        </h6>
        <div className="product-card">
          <div className={styles.priceCard} >
            <div className={styles.productPriceContainer}>
              <div className={styles.productPrice}>${price}</div>
            </div>
            <div>
              <button onClick={()=> addToCart(product) } >
                Add to Cart
                </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
