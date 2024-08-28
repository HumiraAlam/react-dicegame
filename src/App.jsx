import { useEffect, useState } from "react";
import "./App.css";
import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  //conditional rendering  (based on the condition rendering components)
  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame
          isGameStarted={isGameStarted}
          setIsGameStarted={setIsGameStarted}
        />
      )}
    </>
  );
}

export default App;
