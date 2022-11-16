import { useState, useEffect } from 'react';

const useGradientCreator = (baseColor, objs) => {
  const [sat, setSat] = useState([]);
  const [light, setLight] = useState([]);
  const [textColor, setTextColor] = useState('');
  let colorArray = [];

  const mean = Math.round(objs.length / 2);
  const hslStart = baseColor.slice(0, -9);

  useEffect(() => {
    let satBase = parseInt(baseColor.slice(-10, -7));
    let lightBase = parseInt(baseColor.slice(-4, -2));

    const getSaturation = () => {
      let deSat = satBase;
      let satArray = [satBase];
      for (let i = mean; i > 1; i--) {
        satArray.unshift((deSat -= 4));
      }
      for (let i = mean; i < objs.length; i++) {
        satArray.push((satBase += 5));
      }
      setSat(satArray);
    };
    const getLightness = () => {
      let lighter = lightBase;
      let lightArray = [lightBase];
      for (let i = mean; i > 1; i--) {
        lightArray.unshift((lighter += 4));
      }
      for (let i = mean; i < objs.length; i++) {
        lightArray.push((lightBase -= 5));
      }
      setLight(lightArray);
    };

    getSaturation();
    getLightness();

    console.log(lightBase);

    setTextColor(lightBase < 11 ? 'white' : 'black');
  }, [baseColor, mean, objs.length]);

  objs.forEach((_, i) => {
    colorArray.push(`${hslStart}${sat[i]}%, ${light[i]}%)`);
  });

  return { colorArray, textColor };
};

export default useGradientCreator;
