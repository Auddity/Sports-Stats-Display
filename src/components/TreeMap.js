import { useEffect, useState, useRef, useReducer } from 'react'
import '../sass/_TreeMap.scss'
import { PlayerBoxes } from './PlayerBoxes.js'



function TreeMap() {
  const [rushingStats, setRushingStats] = useState([
    {name: 'singletary', yards: 79},
    {name: 'allen', yards: 267},
    {name: 'cook', yards: 890},
    {name: 'bretz', yards: 14},
    {name: 'moss', yards: 654},
    {name: 'mckenzie', yards: 80}
  ])
  
  const ref = useRef(null)

  const yardageTotal = rushingStats.map(obj => obj.yards).reduce((prev, curr) => prev + curr)
  const percents = rushingStats.map(obj => obj.yards).map(value => Math.round(value / yardageTotal * 100))
  const sizeValues = percents.map(value => {
    return {
      width: `${Math.round(value * 40 / 100 * 2)}rem`,
      height: `${Math.round(value * 40 / 100 * 1.2)}rem`
    }
  })
  
  rushingStats.map((obj, i) => {
    return obj.style = sizeValues[i]
  })

  return (
    <article className="TreeMap">
      <h1>TreeMap</h1>
      <div className="container">
        <div className="TreeMap-display-container">
      {/* Make Own Component */}
          <div className="rushing  box-container" ref={ref}>
            <PlayerBoxes 
              rushingStats={rushingStats} 
            />
          </div>

          <div className="receiving box-container">

          </div>
          <div className="tackles box-container">

          </div>
          <div className="interceptions box-container">

          </div>
          <div className="sacks box-container">

          </div>
        </div>
      </div>
    </article>
  )
}

export default TreeMap