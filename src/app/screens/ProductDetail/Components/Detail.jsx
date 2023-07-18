import styles from "./styles.module.css";

export default function Detail({ product }) {
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
            <a href="">Add to cart</a>
          </div>
        </div>
      </div>
    </>
  );
}
