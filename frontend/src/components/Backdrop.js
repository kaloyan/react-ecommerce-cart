import styles from "./Backdrop.module.css";

export default function Backdrop({ show, toggle }) {
  return show && <div className={styles["backdrop"]} onClick={toggle}></div>;
}
