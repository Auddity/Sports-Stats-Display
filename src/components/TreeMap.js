import { useEffect, useState, useRef } from 'react'
import '../sass/_TreeMap.scss'
import { PlayerBoxes } from './PlayerBoxes.js'

function TreeMap() {
  const [rushingStats, setRushingStats] = useState([
    {name: 'singletary', yards: 323},
    {name: 'allen', yards: 306},
    {name: 'cook', yards: 132},
    {name: 'moss', yards: 91},
    {name: 'mckenzie', yards: 8}
  ])
  const ref = useRef(null)

  const yardageTotal = rushingStats.map(obj => obj.yards).reduce((prev, curr) => prev + curr)
  const percents = rushingStats.map(obj => obj.yards).map(value => Math.round(value / yardageTotal * 100))  //--> [array of values = %]

  return (
    <article className="TreeMap">
      <h1>TreeMap</h1>
      <div className="container">
        <div className="TreeMap-display-container">
      {/* Make Own Component */}
          <div className="rushing  box-container" ref={ref}>
            <PlayerBoxes 
              rushingStats={rushingStats} 
              percents={percents}
              yardageTotal={yardageTotal}/>
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