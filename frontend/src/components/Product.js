import styles from "./Product.module.css";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className={styles["product"]}>
      <img src={product.imageUrl} alt={product.name} />

      <div className={styles["product-info"]}>
        <p className={styles["info-name"]}>{product.name}</p>
        <p className={styles["info-description"]}>
          {product.description.substring(0, 100)} ...
        </p>

        <p className={styles["info-price"]}>${product.price}</p>

        <Link to={`/product/${product._id}`} className={styles["info-button"]}>
          View
        </Link>
      </div>
    </div>
  );
}
