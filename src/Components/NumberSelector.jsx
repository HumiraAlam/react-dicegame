import React, { useState } from "react";

export default function NumberSelector(props) {
  const { selectedNumber, setSelectedNumber } = props;
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <div className="dice-box">
      {arrNumber.map((val, index) => {
        return (
          // change here for color
          <div
            className={`dice ${selectedNumber == val ? "selected" : ""} `}
            key={index}
            onClick={() => setSelectedNumber(val)}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}
