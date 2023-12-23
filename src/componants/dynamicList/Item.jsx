/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styles from "./Dyna.module.css";
function Item({ foodItems, handleOnClick, like }) {
  return (
    <>
      <li className={`${styles["list"]} ${like && styles["active"]}`}>
        <span>{foodItems}</span>
        <button className={styles.btn} onClick={handleOnClick}>
          Like
        </button>
      </li>
    </>
  );
}
export default Item;
