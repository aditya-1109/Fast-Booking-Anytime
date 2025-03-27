import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ThrillophiliaClone from './webb';
import ThingsToDoInDubai from './activity';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThrillophiliaClone />} />
        <Route path="/view" element={<ThingsToDoInDubai />} />
      </Routes>
    </Router>
  );
}

export default App;
