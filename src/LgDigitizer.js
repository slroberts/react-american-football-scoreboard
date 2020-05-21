import React from "react";
import "./App.css";

const LgDigitizer = ({score, team, homeClass, nameClass, scoreClass}) => {
  return (
    <div className={homeClass}>
      <h2 className={nameClass}>{team}</h2>

      <div className={scoreClass} name="LionsScore">
        {score}
      </div>
    </div>
  );
};

export default LgDigitizer;
