import React from 'react'
import diceImg from "../assets/dice.png"

export default function StartGame(props) {

    const {isGameStarted, setIsGameStarted}=props
  return (

    <div className='start-game'>
        <div>
            <img src={diceImg}/>

        </div>

        <div>
            <h1>DICE GAME</h1>
            <button onClick={()=>setIsGameStarted(!isGameStarted)}>Play Game</button>
            

        </div>

        
        
    </div>
  )
}
