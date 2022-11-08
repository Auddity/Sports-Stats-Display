import { useEffect, useRef, useState } from 'react'

export const PlayerBoxes = ({ rushingStats }) => {

  const sortedStats = [].concat(rushingStats).sort((a, b) => {
    return b.yards - a.yards
  })

  return (

    sortedStats.map((obj, i) => (
              
      <div 
        key={i}
        className="playerBox"
        style={obj.style}
        >
          <p className='player-yards'>{obj.yards}</p>
          <p className='player-name'>{obj.name}</p>
      </div>
    ))
  )
}