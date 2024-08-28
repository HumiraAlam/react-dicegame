import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'

export default function GamePlay() {
  return (
    <div>
      <div className='gameplay'>
          <TotalScore/>
          <NumberSelector/>
          
      </div>
      <RollDice/>
    </div>
    
  )
}
