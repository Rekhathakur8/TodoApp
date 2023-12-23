/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./ToDo.module.css";

function INput({ OnNewItem }) {
  let [inItemVal, setInItemVal] = useState("");

  let handleNameChange = (event) => {
    setInItemVal(event.target.value);
  };
  const handleOnButtonCliked = () => {
    OnNewItem(inItemVal);
    setInItemVal("");
  };
  return (
    <>
      <div className={style.InputMain}>
        <input
          placeholder="Enter to do "
          value={inItemVal}
          onChange={handleNameChange}
          type="text"
          id={style.ip34}
        />
        <button className={style.inBtn} onClick={handleOnButtonCliked}>
          Add
        </button>
      </div>
    </>
  );
}

export default INput;
