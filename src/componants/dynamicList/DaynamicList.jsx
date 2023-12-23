import style from "./Dyna.module.css";
import InputFiels from "./InputFiels";
import ErrorMsg from "./ErrorMsg";
import FoodItems from "./foodItems";
import { useState } from "react";
function DaynamicList() {
  let [foodItems, setFoodItems] = useState([]);
  let handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <div className={style.mainBox}>
        <div className={style.after}>
          <h1>Healthy food</h1>
          <InputFiels handleOnChange={handleOnChange}></InputFiels>
          <ErrorMsg items={foodItems}></ErrorMsg>
          <FoodItems items={foodItems}></FoodItems>
        </div>
      </div>
    </>
  );
}

export default DaynamicList;
