//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import ScoreBoard from "./ScoreBoard";
import Button from "./Button";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score, setScore] = useState({lions: 0, tigers: 0});
  const [quater, setQuater] = useState(1);

  const handleScoreUpdate = (team, points) => {
    if (team === "lions") {
      setScore({...score, lions: points});
    } else {
      setScore({...score, tigers: points});
    }
  };

  const handleQuaterUpdate = () => {
    if (quater < 4) {
      setQuater(quater + 1);
    }
  };

  const handleReset = () => {
    setScore({lions: 0, tigers: 0});
    setQuater(quater * 0 + 1);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard homeScore={score.lions} awayScore={score.tigers} />
        <BottomRow quaterValue={quater} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <Button
            buttonClass={"homeButtons__touchdown"}
            buttonValue={"Home Touchdown"}
            handleClick={() => handleScoreUpdate("lions", score.lions + 7)}
          />
          <Button
            buttonClass={"homeButtons__fieldGoal"}
            buttonValue={"Home Field Goal"}
            handleClick={() => handleScoreUpdate("lions", score.lions + 3)}
          />
        </div>
        <div className="awayButtons">
          <Button
            buttonClass={"awayButtons__touchdown"}
            buttonValue={"Away Touchdown"}
            handleClick={() => handleScoreUpdate("tigers", score.tigers + 7)}
          />
          <Button
            buttonClass={"awayButtons__fieldGoal"}
            buttonValue={"Away Field Goal"}
            handleClick={() => handleScoreUpdate("tigers", score.tigers + 3)}
          />
        </div>
        <div>
          <Button
            buttonClass={"awayButtons__fieldGoal"}
            buttonValue={"Change Quater"}
            handleClick={() => handleQuaterUpdate()}
          />

          <Button
            buttonClass={"awayButtons__fieldGoal"}
            buttonValue={"Reset"}
            handleClick={() => handleReset()}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
