import style from "./Calci.module.css";

// eslint-disable-next-line react/prop-types
function BtnCont({ onButtonClick }) {
  const buttons = [
    "C",
    "del",
    "%",
    "+",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "/",
    ".",
    "0",
    "=",
  ];
  return (
    <>
      <div className={style.btnFeild}>
        {buttons.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <button
            key={item}
            onClick={() => onButtonClick(item)}
            className={style.btn}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
export default BtnCont;
