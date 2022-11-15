import { getTreemap } from 'treemap-squarify';
import useGradientCreator from '../hooks/useGradientCreator';

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

  const { colorArray, textColor } = useGradientCreator(
    'hsl(94, 65%, 45%)',
    rushingStats
  );

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
        color: textColor,
      }}
    >
      <p className="player-yards">{obj.data.value}</p>
      <p className="player-name">{obj.data.label}</p>
    </div>
  ));
};
