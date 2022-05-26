import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./CartView.module.css";
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

function CartView() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((qty, item) => {
      return Number(item.qty) + qty;
    }, 0);
  };

  const getSubtotal = () => {
    return cartItems.reduce((price, item) => {
      return Number(item.price) * Number(item.qty) + price;
    }, 0);
  };

  return (
    <div className={styles["cart-view"]}>
      <div className={styles["cart-left"]}>
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to={"/"}>Go back</Link>
          </div>
        ) : (
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.product}
                item={item}
                changeQty={qtyChangeHandler}
                removeItem={removeItem}
              />
            );
          })
        )}
      </div>

      <div className={styles["cart-right"]}>
        <div className={styles["cart-info"]}>
          <p>Subtotal ({getCartItemsCount()}) items</p>
          <p>${getSubtotal().toFixed(2)}</p>
        </div>

        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartView;
