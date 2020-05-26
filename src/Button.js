import React from "react";
import "./App.css";

const Button = ({buttonClass, buttonValue, handleClick}) => {
  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonValue}
    </button>
  );
};

export default Button;
