import style from "./Calci.module.css";
// eslint-disable-next-line react/prop-types
function Display({ displayValue }) {
  return (
    <>
      <input
        type="text"
        className={style.Display}
        value={displayValue}
        readOnly
      />
    </>
  );
}
export default Display;
