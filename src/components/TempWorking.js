import '../sass/_TempWorking.scss'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function TempWorking() {
  const [teamTotalYards, setTeamTotalYards] = useState({
    home: 514,
    away: 439,
  });
  const [displayYards, setDisplayYards] = useState({
    home: 0,
    away: 0
  })

  
  const gameTotal = teamTotalYards.home + teamTotalYards.away
  const gradientBreak = teamTotalYards.away * 360 / gameTotal

  const fillAnimation = {
    initial: {backgroundImage: `conic-gradient(from ${0}deg, blue ${0}deg, red ${0}deg)`},
    animate: {backgroundImage: `conic-gradient(from ${50}deg, blue ${gradientBreak}deg, red ${gradientBreak}deg)`}
  }
  // https://www.framer.com/docs/use-transform/

  useEffect(() => {
    let increment = 4;

    let homeStart = 0
    const hE = teamTotalYards.home

    if(homeStart === hE) return
    let homeCount = setInterval(() => {
      if(teamTotalYards.home > 400 ? increment = 6 : increment = 4)
      homeStart += increment

      setDisplayYards(prev => ({
        ...prev,
        home: prev.home = homeStart
      }))
      if(homeStart >= hE) clearInterval(homeCount)
    }, 10)

    let awayStart = 0
    let aE = teamTotalYards.away
    if(awayStart === aE) return
    let aC = setInterval(() => {
      if(teamTotalYards.away > 400 ? increment = 6 : increment = 4)
      awayStart += increment
      setDisplayYards(prev => ({
        ...prev,
        away: prev.away = awayStart
      }))
      if(awayStart === aE) clearInterval(aC)
    }, 10)

  },[teamTotalYards.home, teamTotalYards.away])


  return (
    <main className="Working"
    >
      <h1>Construct Display Elements</h1>
      <div className="container">

        {/* Circle Chart start */}
        <div className="circle-stat-display-container">

          <div className="circle-container">
            <motion.div 
              className="circle" 
              variants={fillAnimation}
              initial='initial'
              animate='animate'
              transition={{
                type: "spring", 
                duration: 2,
              }}
              >
              <div className="circle-center"></div>
            </motion.div>
          </div>
            {/* Stats value display (absolute) */}
            <div className="home-team-stat stat-display">
              {displayYards.home > teamTotalYards.home ? teamTotalYards.home : displayYards.home}
            </div>
            <div className="away-team-stat stat-display">
              {displayYards.away > teamTotalYards.away ? teamTotalYards.away : displayYards.away}
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