import style from "./ToDo.module.css";

// eslint-disable-next-line react/prop-types
function WelcomeMessage({ TodoItemArray }) {
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    TodoItemArray.length === 0 && (
      <p className={style.wlcMsg}>Welcome To Do App</p>
    )
  );
}
export default WelcomeMessage;
