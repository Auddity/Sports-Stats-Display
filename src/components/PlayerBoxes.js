import { useEffect, useRef, useState } from 'react'
const { getTreemap } = require('treemap-squarify')

export const PlayerBoxes = ({ rushingStats }) => {

  rushingStats = [].concat(rushingStats.sort((a, b) => {
    return a.yards - b.yards
  }))

  const squareFormat = rushingStats.map((obj, i) => {
    return {
      value: obj.yards,
      color: '#00338D',
      label: obj.name
    }
  })

  const result = getTreemap({
    data: [
      ...squareFormat
    ],
    width: 400,
    height: 460,
  })

  // console.log(result);

  // TODO: Pass in colors to the data above
  const colors = ['hsl(348, 80%, 56%)', 'hsl(348, 83%, 51%)', 'hsl(348, 86%, 46%)', 'hsl(348, 89%, 41%)', 'hsl(348, 93%, 36%)', 'hsl(348, 96%, 31%)']

  return (

    result.map((obj, i) => (
              
      <div 
        key={i}
        className="playerBox"
        style={{
          top: obj.y,
          left: obj.x,
          height: obj.height,
          width: obj.width,
          backgroundColor: colors[i]
        }}
        >
          <p className='player-yards'>{obj.data.value}</p>
          <p className='player-name'>{obj.data.label}</p>
      </div>
    ))
  )
}