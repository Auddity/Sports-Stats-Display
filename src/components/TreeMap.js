import '../sass/_TreeMap.scss';
import { useState } from 'react';
import { PlayerBoxes } from './PlayerBoxes.js';

function TreeMap() {
  const [rushingStats, setRushingStats] = useState([
    { name: 'harold', yards: 910 },
    { name: 'singletary', yards: 394 },
    { name: 'allen', yards: 476 },
    { name: 'cook', yards: 169 },
    { name: 'johnson', yards: 891 },
    { name: 'moss', yards: 91 },
    { name: 'mckenzie', yards: 35 },
    { name: 'alfredson', yards: 235 },
  ]);

  return (
    <article className="TreeMap">
      <div className="container">
        <h1>TreeMap</h1>
        <div className="TreeMap-display-container">
          {/* Make Own Component */}
          <div className="rushing  box-container">
            <PlayerBoxes rushingStats={rushingStats} />
          </div>

          {/* <div className="receiving box-container">

          </div>
          <div className="tackles box-container">

          </div>
          <div className="interceptions box-container">

          </div>
          <div className="sacks box-container">

          </div> */}
        </div>
      </div>
    </article>
  );
}

export default TreeMap;
