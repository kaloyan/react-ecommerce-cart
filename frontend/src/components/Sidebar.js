import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Sidebar.module.css";

export default function Sidebar({ show, toggle }) {
  const classes = [styles["sidebar"]];

  if (show) {
    classes.push(styles["show"]);
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => {
      return Number(item.qty) + count;
    }, 0);
  };

  return (
    show && (
      <div className={classes.join(" ")}>
        <ul className={styles["sidebar-links"]}>
          <li>
            <Link to={"/cart"} onClick={toggle}>
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart{" "}
                <span className={styles["sidebar-cart-badge"]}>
                  {getCartItemsCount()}
                </span>
              </span>
            </Link>
          </li>

          <li>
            <Link to={"/"} onClick={toggle}>
              Shop
            </Link>
          </li>
        </ul>
      </div>
    )
  );
}
