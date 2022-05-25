import styles from "./ProductView.module.css";

function ProductView() {
  return (
    <div className={styles["product-view"]}>
      <div className={styles["productview-left"]}>
        <div className={styles["left-image"]}>
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="product name"
          />
        </div>

        <div className={styles["left-info"]}>
          <p className={styles["left-name"]}>Product 1</p>
          <p className={styles["left-price"]}>Price: $499.99</p>
          <p className={styles["left-description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            explicabo fuga deserunt ipsum libero laboriosam!
          </p>
        </div>
      </div>

      <div className={styles["productview-right"]}>
        <div className={styles["right-info"]}>
          <p>
            Price: <span>$499.99</span>
          </p>

          <p>
            Status: <span>In Stock</span>
          </p>

          <p>
            Qty:
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>

          <p>
            <button>Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
