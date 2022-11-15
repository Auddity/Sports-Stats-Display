import { useEffect, useState } from 'react';
import { getTreemap } from 'treemap-squarify';
import useColorVariants from '../hooks/useColorVariants';

export const PlayerBoxes = ({ rushingStats }) => {
  const [colors, setColors] = useState([]);

  rushingStats = [].concat(
    rushingStats.sort((a, b) => {
      return a.yards - b.yards;
    })
  );

  const squareFormat = rushingStats.map((obj, i) => {
    return {
      value: obj.yards,
      label: obj.name,
    };
  });

  const result = getTreemap({
    data: [...squareFormat],
    width: 400,
    height: 460,
  });

  const { variants } = useColorVariants('hsl(348, 89%, 41%)');

  useEffect(() => {
    setColors(variants);
  }, [variants]);

  console.log(variants);

  return result.map((obj, i) => (
    <div
      key={i}
      className="playerBox"
      style={{
        top: obj.y,
        left: obj.x,
        height: obj.height,
        width: obj.width,
        backgroundColor: colors[i],
      }}
    >
      <p className="player-yards">{obj.data.value}</p>
      <p className="player-name">{obj.data.label}</p>
    </div>
  ));
};
