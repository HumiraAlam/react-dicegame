import React from "react";

export default function (props) {
  const { score } = props;
  return (
    <div>
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  );
}
