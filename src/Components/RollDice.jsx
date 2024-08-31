
import React, { useState } from 'react'

export default function RollDice(props) {
  const {currentDice, setCurrentDice, selectedNumber, setScore}=props
 

  const generateRandomNumber = () => {
    return Math.random(Math.random() * 6) + 1;
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber);

    if(currentDice==selectedNumber){
      setScore((prev)=> prev+10)
    }else {
      setScore((prev)=>prev-10)
    }
  }

  return (
    <div onClick={() => roleDice()}>
      <img src={`/images/dice_${currentDice}.png`} />
    </div>
  );
}

