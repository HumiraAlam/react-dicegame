import React, { useState } from 'react'

export default function NumberSelector() {
    const arrNumber = [1,2,3,4,5,6]
    // const [selectedNumber, setSelectedNumber]=useState;
  return (
    <div className='dice-box'>{
        arrNumber.map((val, index)=>{
            return <div key={index} className='dice'>{val}</div>
        })
    }


      


    </div>
  )
}
