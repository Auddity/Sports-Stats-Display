import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import CircleGraph from './components/CircleGraph';
import TreeMap from './components/TreeMap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="display">
          <Route path="CircleGraph" element={<CircleGraph />} />
          <Route path="TreeMap" element={<TreeMap />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
