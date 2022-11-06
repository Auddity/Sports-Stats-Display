import { useEffect, useRef, useState } from 'react'

export const PlayerBoxes = ({ rushingStats, percents, yardageTotal }) => {
  const [{ name, yards }] = rushingStats
 
  let sizeValues = percents.map(value => {
    return {
      height: `${value * 40 / 100 * 1.5}rem`,
      // width: `${value * 40 / 100 * 1.5}rem`
    }
  })
  console.log(sizeValues);

  return (

    Object.entries(sizeValues).map(([key, style], i) => (
              
      <div 
        key={key}
        className="playerBox"
        style={style}
        // ref={ref}
        >
          <p className='player-yards'>{}</p>
          <p className='player-name'>{}</p>
      </div>
    ))
  )
}