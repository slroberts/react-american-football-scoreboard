import React from "react";
import LgDigitizer from "./LgDigitizer";
import Timer from "./Timer";
import "./App.css";

const ScoreBoard = ({homeScore, awayScore}) => {
  return (
    <div className="topRow">
      <LgDigitizer
        score={homeScore}
        homeClass={"home"}
        nameClass={"home__name"}
        scoreClass={"home__score"}
      />

      <Timer />

      <LgDigitizer
        score={awayScore}
        homeClass={"away"}
        nameClass={"away__name"}
        scoreClass={"away__score"}
      />
    </div>
  );
};

export default ScoreBoard;
