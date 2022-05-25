import styles from "./CartView.module.css";
import CartItem from "../components/CartItem";

function CartView() {
  return (
    <div className={styles["cart-view"]}>
      <div className={styles["cart-left"]}>
        <h2>Shopping Cart</h2>

        <CartItem />
      </div>

      <div className={styles["cart-right"]}>
        <div className={styles["cart-info"]}>
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>

        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartView;
