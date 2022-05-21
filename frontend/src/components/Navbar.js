import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
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
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/product/:id"}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"} className={styles["cart-link"]}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className={styles["cartlogo-badge"]}>0</span>
            </span>
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className={styles["hamburger-menu"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
