import styles from "./HomeView.module.css";
import Product from "../components/Product";

function HomeView() {
  return (
    <div className={styles["homeview"]}>
      <h2 className={styles["homeview-title"]}>Latest Products</h2>

      <div className={styles["homewview-products"]}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default HomeView;
