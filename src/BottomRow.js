import React from "react";
import SmDigitizer from "./SmDigitizer";
import "./App.css";

const BottomRow = ({quaterValue}) => {
  return (
    <div>
      <div className="bottomRow">
        <SmDigitizer
          titleClass={"down"}
          headingClass={"down__title"}
          divClass={"down__value"}
          headingValue={"Down"}
          divValue={3}
        />
        <SmDigitizer
          titleClass={"toGo"}
          headingClass={"toGo__title"}
          divClass={"toGo__value"}
          headingValue={"To Go"}
          divValue={7}
        />
        <SmDigitizer
          titleClass={"ballOn"}
          headingClass={"ballOn__title"}
          divClass={"ballOn__value"}
          headingValue={"Ball on"}
          divValue={21}
        />
        <SmDigitizer
          titleClass={"quarter"}
          headingClass={"quarter__title"}
          divClass={"quarter__value"}
          headingValue={"Quarter"}
          divValue={quaterValue}
        />
      </div>
    </div>
  );
};

export default BottomRow;
