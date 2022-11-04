
export const PlayerBoxes = ({ rushingStats }) => {
  console.log(rushingStats);

  
  return (

    rushingStats.map((player, i) => (
              
      <div 
        key={i}
        className="playerBox"
        // style={styles}
        // ref={ref}
        >
          <p className='player-yards'>{player.yards}</p>
          <p className='player-name'>{player.name}</p>
      </div>
    ))
  )
}