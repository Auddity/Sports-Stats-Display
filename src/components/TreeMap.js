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
  const [sizeValues, setSizeValues] = useState(0)
  // const ref = useRef(null)
  const refC = useRef(null)

  const yardageTotal = rushingStats.map(obj => obj.yards).reduce((prev, curr) => prev + curr)
  const percents = rushingStats.map(obj => obj.yards).map(value => Math.round(value / yardageTotal * 100))  //--> [array of values = %]

  let styles = {
    width: ``
  }

  useEffect(() => {
    // setSizeValues(ref.current.clientHeight)
    // console.log(ref.current.clientHeight);
    console.log(refC.current.clientHeight);
  },[])

  console.log(sizeValues);
 

  return (
    <article className="TreeMap">
      <h1>TreeMap</h1>
      <div className="container">
        <div className="TreeMap-display-container">
      {/* Make Own Component */}
          <div className="rushing  box-container" ref={refC}>
            <PlayerBoxes rushingStats={rushingStats} />
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