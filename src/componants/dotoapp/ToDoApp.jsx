import Heading from "./Heading";
import style from "./ToDo.module.css";
import INput from "./INput";
import ToDoItem from "./ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";

function ToDoApp() {
  let [todoItems, setToDoItem] = useState([]);

  let handleOnNewItem = (itemSet) => {
    console.log(`${itemSet}`);
    let newItem = [...todoItems, itemSet];
    setToDoItem(newItem);
  };
  const handleDeleteItem = (todoItemName) => {
    const taskIndex = todoItems.findIndex((item) => item.text === todoItemName);

    const updateTasks = [...todoItems];
    updateTasks.splice(taskIndex, 1);
    setToDoItem(updateTasks);
  };
  return (
    <>
      <div className={style.mainCenter}>
        <Heading></Heading>
        <INput OnNewItem={handleOnNewItem}></INput>
        <WelcomeMessage TodoItemArray={todoItems}></WelcomeMessage>
        <ToDoItem todoItems={todoItems} onDelete={handleDeleteItem}></ToDoItem>
      </div>
    </>
  );
}
export default ToDoApp;
