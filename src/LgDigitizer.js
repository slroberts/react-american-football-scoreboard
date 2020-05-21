import React from "react";
import "./App.css";

const LgDigitizer = ({score, homeClass, nameClass, scoreClass}) => {
  return (
    <div className={homeClass}>
      <h2 className={nameClass}>Lions</h2>

      <div className={scoreClass} name="LionsScore">
        {score}
      </div>
    </div>
  );
};

export default LgDigitizer;
