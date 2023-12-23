/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import style from "./ToDo.module.css";

// eslint-disable-next-line react/prop-types
function ToDoItem({ todoItems, onDelete }) {
  return (
    <>
      {todoItems.map((item) => (
        <div key={item} className={style.ItemMain}>
          <ul className={style.ItemUl}>
            <li className={style.ItemLiOne}>{item}</li>
            <li className={style.ItemLiTwo}>
              <input type="Date" className={style.InDate} />
            </li>
          </ul>
          <button className={style.ItemBtn} onClick={() => onDelete(item)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default ToDoItem;
