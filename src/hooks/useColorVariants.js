import { useState, useEffect } from 'react';

const useColorVariants = baseColor => {
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    setVariants([baseColor]);
  }, [baseColor]);

  return { variants };
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
