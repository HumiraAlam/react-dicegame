import React from 'react'
import dice1 from "../assets/dice_1.png"

export default function RollDice() {
    const generateRandomNumber=()=>{
        return Math.random(Math.random()*6)+1


    }


  return (
    <div onClick={()=>generateRandomNumber()}>
        <img src={dice1} />


    </div>
  )
}