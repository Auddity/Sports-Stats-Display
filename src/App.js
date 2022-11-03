import { Route, Routes } from 'react-router-dom'
import './App.scss';
import TempLanding from './components/TempLanding';
import CircleGraph from './components/CircleGraph'
import TreeMap from './components/TreeMap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TempLanding />} />
      <Route path="CircleGraph" element={<CircleGraph />} />
      <Route path="TreeMap" element={<TreeMap />} />
    </Routes>
  );
}

export default App;
