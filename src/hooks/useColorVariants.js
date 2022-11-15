import { useState, useEffect } from 'react';

const useColorVariants = (baseColor, objs) => {
  const [sat, setSat] = useState([]);
  const [light, setLight] = useState([]);

  const mean = Math.round(objs.length / 2);

  useEffect(() => {
    let satBase = parseInt(baseColor.slice(-9, -7));
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
  }, [baseColor, mean, objs.length]);

  const colorStart = baseColor.slice(0, -9);
  let colorArray = [];
  objs.forEach((_, i) => {
    colorArray.push(`${colorStart}${sat[i]}%, ${light[i]}%)`);
  });

  return { colorArray };
};

export default useColorVariants;

// const colors = [
//   'hsl(348, 80%, 56%)',
//   'hsl(348, 83%, 51%)',
//   'hsl(348, 86%, 46%)',
//   'hsl(348, 89%, 41%)',
//   'hsl(348, 93%, 36%)',
//   'hsl(348, 96%, 31%)',
// ];
