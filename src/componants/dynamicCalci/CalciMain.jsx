import style from "./Calci.module.css";
import Display from "./Display";
import BtnCont from "./BtnCont";
import { useState } from "react";

function CalciMain() {
  const [calVal, setCalVal] = useState(" ");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal(" ");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "del") {
      const lastCharRemoved = calVal.slice(0, calVal.length - 1);
      setCalVal(lastCharRemoved);
    } else {
      let newDisplay = calVal + buttonText;
      setCalVal(newDisplay);
    }
  };
  return (
    <>
      <div className={style.mainCont}>
        <Display displayValue={calVal}></Display>
        <BtnCont onButtonClick={onButtonClick}></BtnCont>
      </div>
    </>
  );
}
export default CalciMain;
