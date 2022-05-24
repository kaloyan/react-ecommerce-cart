import styles from "./Product.module.css";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className={styles["product"]}>
      <img
        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        alt="product name"
      />

      <div className={styles["product-info"]}>
        <p className={styles["info-name"]}>Product 1</p>
        <p className={styles["info-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae
          laudantium minima. Velit, illo harum!
        </p>

        <p className={styles["info-price"]}>$499.99</p>

        <Link to={`/product/${1}`} className={styles["info-button"]}>
          View
        </Link>
      </div>
    </div>
  );
}