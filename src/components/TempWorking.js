import '../sass/_TempWorking.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'

function TempWorking() {
  const [teamTotalYards, setTeamTotalYards] = useState({
    home: 450,
    away: 229,
  });
  
  const gameTotal = teamTotalYards.home + teamTotalYards.away
  const gradientBreak = teamTotalYards.away * 360 / gameTotal

  // const pieRingStyle = {
  //   backgroundImage: `conic-gradient(from 50deg, blue ${gradientBreak}deg, red ${gradientBreak}deg)`
  // }

  const fillAnimation = {
    initial: {backgroundImage: `conic-gradient(blue ${250}deg, red ${250}deg)`},
    animate: {backgroundImage: `conic-gradient(blue ${gradientBreak}deg, red ${gradientBreak}deg)`}
  }

  return (
    <main className="Working">
      <h1>Construct Display Elements</h1>
      <div className="container">

        {/* Circle Chart start */}
        <div className="circle-container">
          <motion.div 
            className="circle" 
            // style={pieRingStyle}
            variants={fillAnimation}
            initial='initial'
            animate='animate'
          >

            <div className="circle-center">

            </div>
          </motion.div>
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