import styles from "./CartItem.module.css";
import { Link } from "react-router-dom";

export default function CartItem() {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cartitem-image"]}>
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="product name"
        />
      </div>

      <Link to={`/product/${1}`} className={styles["item-name"]}>
        <p>product 1</p>
      </Link>

      <p className={styles["item-price"]}>$499.99</p>

      <select name="" id="" className={styles["item-select"]}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className={styles["item-delete-btn"]}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
