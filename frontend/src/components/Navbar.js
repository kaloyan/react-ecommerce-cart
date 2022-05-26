import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css";

function Navbar({ toggle }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => {
      return Number(item.qty) + count;
    }, 0);
  };

  return (
    <nav className={styles["navbar"]}>
      {/* Logo */}
      <NavLink to={"/"}>
        <div className={styles["navbar-logo"]}>
          <h2>MERN Shopping Cart</h2>
        </div>
      </NavLink>

      {/* Links */}
      <ul className={styles["navbar-links"]}>
        <li>
          <NavLink to={"/"}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"} className={styles["cart-link"]}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className={styles["cartlogo-badge"]}>
                {getCartItemsCount()}
              </span>
            </span>
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className={styles["hamburger-menu"]} onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
