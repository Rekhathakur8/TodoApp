import sytles from "./Dyna.module.css";

// eslint-disable-next-line react/prop-types
function InputFiels({ handleOnChange }) {
  return (
    <input
      type="text"
      placeholder="Add more vegies in your list"
      className={sytles.inp}
      id="specialYouAre"
      onKeyDown={handleOnChange}
    />
  );
}
export default InputFiels;
