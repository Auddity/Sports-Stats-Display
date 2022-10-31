import '../sass/_TempWorking.scss'
import { useState } from 'react'
import { motion, useTime } from 'framer-motion'

function TempWorking() {
  const [teamTotalYards, setTeamTotalYards] = useState({
    home: 300,
    away: 229,
  });
  
  const gameTotal = teamTotalYards.home + teamTotalYards.away
  const gradientBreak = teamTotalYards.away * 360 / gameTotal

  // const pieRingStyle = {
  //   backgroundImage: `conic-gradient(from 50deg, blue ${gradientBreak}deg, red ${gradientBreak}deg)`
  // }
  // const time = useTime();
  // const timing = useTransform(time, [0, 500], [100, gradientBreak], { clamp: false })

  const fillAnimation = {
    initial: {backgroundImage: `conic-gradient(from ${0}deg, blue ${0}deg, red ${0}deg)`},
    animate: {backgroundImage: `conic-gradient(from ${50}deg, blue ${gradientBreak}deg, red ${gradientBreak}deg)`}
  }
  // https://www.framer.com/docs/use-transform/

  // console.log(teamTotalYards.home, teamTotalYards.away)
  const countUp = () => {
    let display = 0;
    let count = 0
    setInterval(() => {
      while(count <= teamTotalYards.home) {
        display = count
        count++
        console.log(display);
        return display;
      }
    }, 100);
  }

  // countUp();

  return (
    <main className="Working">
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
                repeat: Infinity
              }}
              >
              <div className="circle-center"></div>
            </motion.div>
          </div>
            {/* Stats value display (absolute) */}
            <div className="home-team-stat stat-display">{countUp}</div>
            <div className="away-team-stat stat-display">{}</div>

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