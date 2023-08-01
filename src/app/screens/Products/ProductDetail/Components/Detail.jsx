import styles from "./styles.module.css";
import CartContext from "../../../../Context/Cart/CartContext";
import { useContext } from "react";


export default function Detail({ product }) {
  const { addToCart } = useContext(CartContext)
  const {
    id,
    title,
    price,
    images,
    category,
    description,
    creationAt,
    updatedAt,
  } = product;

  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.imageGrid}>
          {images.map((img) => (
            <img key={img} src={img} alt="..." />
          ))}
        </div>
        <div className={styles.productInfo}>
          <h1 className="title">{title}</h1>
          <h3>${price}</h3>
          <h3>{category.name}</h3>
          <h5>{description}</h5>
          <div>
            <h6>Product id: {id}</h6>
            <h6>Created At: {creationAt}</h6>
            <h6>updatedAt: {updatedAt}</h6>
            <button onClick={ ()=> addToCart(product) } >Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
