import { Routes } from 'react-router-dom';
import { Route } from 'react-router';

import { Home } from './pages/Home';
import { CityForecast } from './pages/CityForecast';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='forecast/:id' element={<CityForecast />} />
    </Routes>
  );
}

export default App;
