import { useEffect, useRef, useState } from 'react'
const { getTreemap } = require('treemap-squarify')

export const PlayerBoxes = ({ rushingStats }) => {

  const sortedStats = [].concat(rushingStats).sort((a, b) => {
    return b.yards - a.yards
  })

  // TODO: take rushing stats and turn it into the array of objects below

  const result = getTreemap({
    data: [
      {value: 79},
      {value: 267},
      {value: 860},
      {value: 14},
      {value: 654},
      {value: 80},
    ],
    width: 400,
    height: 460,
  })

  console.log(result);
  // TODO: Get result data into the map component
  // x & y, so position absolute inside the container
  // width & height are exactly that.
  // TODO: Pass in colors to the data above

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