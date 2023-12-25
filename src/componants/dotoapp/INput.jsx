/* eslint-disable react/prop-types */
import { useRef } from "react";
import style from "./ToDo.module.css";
import { IoIosAddCircle } from "react-icons/io";

function INput({ OnNewItem }) {
  // let [inItemVal, setInItemVal] = useState("");
  const todoItemElement = useRef();

  const handleOnButtonCliked = () => {
    let todoName = todoItemElement.current.value;
    OnNewItem(todoName);
    todoItemElement.current.value = "";
  };
  return (
    <>
      <div className={style.InputMain}>
        <input
          ref={todoItemElement}
          placeholder="Enter to do "
          type="text"
          id={style.ip34}
        />
        <button className={style.inBtn} onClick={handleOnButtonCliked}>
          <IoIosAddCircle />
        </button>
      </div>
    </>
  );
}

export default INput;
