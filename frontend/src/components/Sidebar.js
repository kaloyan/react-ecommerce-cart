import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar({ show, toggle }) {
  const classes = [styles["sidebar"]];

  if (show) {
    classes.push(styles["show"]);
  }

  return (
    show && (
      <div className={classes.join(" ")}>
        <ul className={styles["sidebar-links"]}>
          <li>
            <Link to={"/cart"} onClick={toggle}>
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart <span className={styles["sidebar-cart-badge"]}>0</span>
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
