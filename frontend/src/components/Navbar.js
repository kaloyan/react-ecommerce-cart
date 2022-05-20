import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.navbar__logo}>
        <h2>MERN Shopping Cart</h2>
      </div>

      {/* Links */}
      <ul className={styles.navbar__links}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>Cart</NavLink>
        </li>
      </ul>

      {/* Hamburger Menu */}
    </nav>
  );
}

export default Navbar;
