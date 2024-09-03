import React, { useState } from "react";
import GameRule from "./GameRule";

export default function RollDice(props) {
  const {
    currentDice,
    setCurrentDice,
    selectedNumber,
    setScore,
    setSelectedNumber,
  } = props;

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber();

    setCurrentDice(randomNumber);

    if (currentDice == selectedNumber) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 10);
    }
  };
  const reset = () => {
    setScore(0);
    setCurrentDice(1);
    setSelectedNumber(null);
  };
  const [ShowRules, setShowRules] = useState(false);

  return (
    <div className="rolldicediv">
      <div onClick={() => roleDice()} >
        <img src={`/images/dice_${currentDice}.png`} />
        <p>Click on Dice to Roll</p>
      </div>
        <button onClick={() => reset()}>Reset Score</button>
        <br />
        <br />
        <button onClick={() => setShowRules(!ShowRules)}>Show Rules</button>
        {ShowRules ? <GameRule /> : ""}
    </div>
  );
}
