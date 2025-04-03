import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ThrillophiliaClone from './webb';
import ThingsToDoInDubai from './activity';
import DubaiTourCard from './pages';
import HeroSection from './about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThrillophiliaClone />} />
        <Route path="/country/:countryName" element={<ThrillophiliaClone />} />
        <Route path="/view/:country" element={<ThingsToDoInDubai />} />
        <Route path='/pic/:tittle/:country' element={<DubaiTourCard />} />
        <Route path='/about' element={<HeroSection />} />
      </Routes>
    </Router>
  );
}

export default App;
