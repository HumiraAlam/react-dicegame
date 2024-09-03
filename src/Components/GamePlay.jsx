import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'

export default function GamePlay() {
  const [selectedNumber, setSelectedNumber]=useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore]=useState(0);
  return (
    <div>
      <div className='gameplay'>
          <TotalScore score={score} />
          <NumberSelector
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}/>
          
      </div>
      <RollDice
        currentDice={currentDice}
        setCurrentDice={setCurrentDice}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        setScore={setScore}/>
    </div>
    
  )
}
