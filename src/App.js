import { Route, Routes } from 'react-router-dom'
import './App.scss';
import TempUnderConst from './components/TempUnderConst';
import TempWorking from './components/TempWorking'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TempUnderConst />} />
      <Route path="tempWorking" element={<TempWorking />} />
    </Routes>
  );
}

export default App;
