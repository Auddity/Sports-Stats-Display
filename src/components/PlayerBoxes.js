import { useEffect, useRef, useState } from 'react'

export const PlayerBoxes = ({ rushingStats }) => {
  

  return (

    rushingStats.map((obj, i) => (
              
      <div 
        key={i}
        className="playerBox"
        style={obj.style}
        // ref={ref}
        >
          <p className='player-yards'>{obj.yards}</p>
          <p className='player-name'>{obj.name}</p>
      </div>
    ))
  )
}