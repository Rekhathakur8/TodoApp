/* eslint-disable react/jsx-key */
import { useState } from "react";
import styles from "./Dyna.module.css";
import Item from "./Item";
/* eslint-disable react/prop-types */
function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);

  let onLikeBtn = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <>
      <ul className={styles.ulStyle}>
        {items.map((item) => (
          <Item
            key={item}
            foodItems={item}
            like={activeItems.includes(item)}
            handleOnClick={(event) => onLikeBtn(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
