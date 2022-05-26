import styles from "./ProductView.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Import actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

function ProductView() {
  const params = useParams();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && params.id !== product._id) {
      dispatch(getProductDetails(params.id));
    }
  }, [dispatch, product, params.id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    // history.push("/cart");
  };

  return (
    <div className={styles["product-view"]}>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className={styles["productview-left"]}>
            <div className={styles["left-image"]}>
              <img src={product.imageUrl} alt={product.name} />
            </div>

            <div className={styles["left-info"]}>
              <p className={styles["left-name"]}>{product.name}</p>
              <p className={styles["left-price"]}>Price: ${product.price}</p>
              <p className={styles["left-description"]}>
                Description: {product.description}
              </p>
            </div>
          </div>

          <div className={styles["productview-right"]}>
            <div className={styles["right-info"]}>
              <p>
                Price: <span>${product.price}</span>
              </p>

              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>

              <p>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => {
                    return (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    );
                  })}
                </select>
              </p>

              <p>
                <button onClick={addToCartHandler}>Add to cart</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductView;
