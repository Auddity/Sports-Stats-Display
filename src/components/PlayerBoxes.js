import { getTreemap } from 'treemap-squarify';
import useColorVariants from '../hooks/useColorVariants';

export const PlayerBoxes = ({ rushingStats }) => {
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

  const { colorArray } = useColorVariants('hsl(348, 89%, 41%)', rushingStats);

  console.log(colorArray);

  // const colors = [
  //   'hsl(348, 80%, 56%)',
  //   'hsl(348, 83%, 51%)',
  //   'hsl(348, 86%, 46%)',
  //   'hsl(348, 89%, 41%)',
  //   'hsl(348, 93%, 36%)',
  //   'hsl(348, 96%, 31%)',
  // ];

  const colors = [
    'hsl(348, 77%, 53%)',
    'hsl(348, 81%, 49%)',
    'hsl(348, 85%, 45%)',
    'hsl(348, 89%, 41%)',
    'hsl(348, 82%, 49%)',
    'hsl(348, 87%, 45%)',
    'hsl(348, 92%, 41%)',
  ];

  return result.map((obj, i) => (
    <div
      key={i}
      className="playerBox"
      style={{
        top: obj.y,
        left: obj.x,
        height: obj.height,
        width: obj.width,
        backgroundColor: colorArray[i],
      }}
    >
      <p className="player-yards">{obj.data.value}</p>
      <p className="player-name">{obj.data.label}</p>
    </div>
  ));
};
