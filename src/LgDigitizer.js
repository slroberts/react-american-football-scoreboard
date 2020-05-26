import React from "react";
import "./App.css";

const LgDigitizer = ({homeClass, nameClass, scoreClass, score, team}) => {
  return (
    <div className={homeClass}>
      <h2 className={nameClass}>{team}</h2>
      <div className={scoreClass}>{score}</div>
    </div>
  );
};

export default LgDigitizer;
