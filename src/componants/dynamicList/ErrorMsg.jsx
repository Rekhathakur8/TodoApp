/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import style from "./Dyna.module.css";
// eslint-disable-next-line react/prop-types
function ErrorMsg({ items }) {
  // eslint-disable-next-line react/prop-types
  return (
    <>
      {items.length == 0 && <h3 className={style.ermg}>I am still hungry</h3>}
    </>
  );
}

export default ErrorMsg;
