import React from "react";
import "./App.css";

const SmDigitizer = ({
  titleClass,
  headingClass,
  divClass,
  headingValue,
  divValue,
}) => {
  return (
    <div className={titleClass}>
      <h3 className={headingClass}>{headingValue}</h3>
      <div className={divClass}>{divValue}</div>
    </div>
  );
};

export default SmDigitizer;
