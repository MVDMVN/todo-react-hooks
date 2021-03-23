import React, {useState} from "react";

const TextInput = (props) => {
  const [inputValue, setInputValue] = useState("" || props.value);

  const onKeyPressHandler = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      props.onEnter(inputValue);
      setInputValue("");
    }
  };

  const onInputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onBlurHandler = () => {
    if (props.onBlur) {
      props.onBlur(inputValue);
    }
  };

  return (
    <input
      type="text"
      className={props.className}
      placeholder={props.inputPlaceholder}
      onChange={onInputChangeHandler}
      onKeyPress={onKeyPressHandler}
      onBlur={onBlurHandler}
      value={inputValue}
    />
  )
}

export default TextInput;
