import '../sass/_TempWorking.scss'
import { useState } from 'react'

function TempWorking() {
  const [teamTotalYards, setTeamTotalYards] = useState({
    home: 450,
    away: 229,
  });
  
  const gameTotal = teamTotalYards.home + teamTotalYards.away
  const gradientBreak = teamTotalYards.away * 360 / gameTotal
  
  // console.log(gameTotal);
  // console.log(homePercentage, awayPercentage);
  console.log(gradientBreak);

  const pieRingStyle = {
    backgroundImage: `conic-gradient(from 50deg, blue ${gradientBreak}deg, red ${gradientBreak}deg)`
  }

  return (
    <main className="Working">
      <h1>Construct Display Elements</h1>
      <div className="container">

        {/* Circle Chart start */}
        <div className="circle-container">
          <div 
            className="circle" 
            style={pieRingStyle}
          >

            <div className="circle-center">

            </div>
          </div>
        </div>
      {/* Circle Chart End */}

      {/* Tree Map Start */}
      <div className="tree-map-container">

      </div>
      {/* Tree Map End  */}

      </div>
    </main>
  )
}

export default TempWorking