import styles from "./HomeView.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import components
import Product from "../components/Product";

// Import actions
import { getProducts as listProducts } from "../redux/actions/productActions";

function HomeView() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className={styles["homeview"]}>
      <h2 className={styles["homeview-title"]}>Latest Products</h2>

      <div className={styles["homewview-products"]}>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => {
            return <Product key={product._id} product={product} />;
          })
        )}
      </div>
    </div>
  );
}

export default HomeView;
