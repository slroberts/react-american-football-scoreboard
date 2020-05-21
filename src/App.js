//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import ScoreBoard from "./ScoreBoard";
import Button from "./Button";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score, setScore] = useState({lions: 0, tigers: 0});

  const handleScoreUpdate = (points) => {
    setScore({...score, lions: points});
  };

  //[ ] Write a "handler" function in App component that takes in a team name and an amount.
  //This function will then be passed to each button's click handler.
  //It will increment the correct team's score by the passed in amount

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard homeScore={score.lions} awayScore={score.tigers} />
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <Button
            buttonClass={"homeButtons__touchdown"}
            buttonValue={"Home Touchdown"}
            onClick={() => handleScoreUpdate(score.lions + 7)}
          />
          <Button
            buttonClass={"homeButtons__fieldGoal"}
            buttonValue={"Home Field Goal"}
            onClick={() => handleScoreUpdate(score.lions + 3)}
          />
        </div>
        <div className="awayButtons">
          <Button
            buttonClass={"awayButtons__touchdown"}
            buttonValue={"Away Touchdown"}
            onClick={() => handleScoreUpdate(score.lions + 7)}
          />
          <Button
            buttonClass={"awayButtons__fieldGoal"}
            buttonValue={"Away Field Goal"}
            onClick={() => handleScoreUpdate(score.lions + 3)}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
