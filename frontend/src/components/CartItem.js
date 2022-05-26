import styles from "./CartItem.module.css";
import { Link } from "react-router-dom";

export default function CartItem({ item, changeQty, removeItem }) {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cartitem-image"]}>
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className={styles["item-name"]}>
        <p>{item.name}</p>
      </Link>

      <p className={styles["item-price"]}>${item.price}</p>

      <select
        value={item.qty}
        onChange={(e) => changeQty(item.product, e.target.value)}
        className={styles["item-select"]}
      >
        {[...Array(item.countInStock).keys()].map((x) => {
          return (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          );
        })}
      </select>

      <button
        className={styles["item-delete-btn"]}
        onClick={() => removeItem(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
