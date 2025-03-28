import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ThrillophiliaClone from './webb';
import ThingsToDoInDubai from './activity';
import DubaiTourCard from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThrillophiliaClone />} />
        <Route path="/country/:countryName" element={<ThrillophiliaClone />} />
        <Route path="/view" element={<ThingsToDoInDubai />} />
        <Route path='/pic/:tittle' element={<DubaiTourCard />} />
      </Routes>
    </Router>
  );
}

export default App;
